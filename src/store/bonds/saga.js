import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { list, detail } from '../../services/bonds';
import { accountProfile, getToken } from '../selectors';

export function* bondsList() {
  yield takeEvery(actions.BONDS_LIST, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield list(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.BONDS, list: res.data.data.data });
      }

      yield put({ type: actions.BONDS_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BONDS_ERROR, error: error.message });
    }
  });
}

export function* bondsGet() {
  yield takeEvery(actions.BONDS_GET, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING, loading: true });

      // get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield detail(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.BONDS_DETAIL, detail: res.data.data });
      }

      yield put({ type: actions.BONDS_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(bondsList), fork(bondsGet)]);
}
