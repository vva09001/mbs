import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Authentication } from '../../services/account';

export function* authSaga() {
  yield takeEvery(actions.AUTH_REQUEST, function*(data) {
    try {
      // Get response
      const res = yield Authentication(data.data);
      if (res.status === 200) {
        yield put({ type: actions.AUTH, auth: true });
      } else {
        yield put({ type: actions.AUTH, error: false });
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
