import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { list, detail } from '../../services/bonds';

export function* bondsList() {
  yield takeEvery(actions.BONDS_LIST, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING });

      // Get request
      const res = yield list(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BONDS, list: res.data.data.data });
      }

      yield put({ type: actions.BONDS_LOADING });
    } catch (error) {
      yield put({ type: actions.BONDS_ERROR, error: error.message });
    }
  });
}

export function* bondsGet() {
  yield takeEvery(actions.BONDS_GET, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING });

      // get request
      const res = yield detail(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BONDS_DETAIL, detail: res.data.data });
      }

      yield put({ type: actions.BONDS_LOADING });
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(bondsList), fork(bondsGet)]);
}
