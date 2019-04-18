import actions from './actions';
import accountActions from 'store/account/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Authentication } from 'services/auth';
import Error from 'utils/error';

export function* authSaga() {
  yield takeEvery(actions.AUTH_REQUEST, function*(data) {
    try {
      // Get response
      const params = {
        customerId: data.params.customerId,
        check_sum: data.params.check_sum,
        merchant_code: data.params.merchant_code,
        msisdn: data.params.msisdn,
        time: data.params.time
      };
      const res = yield Authentication(params);
      if (res.status === 200) {
        yield put({ type: actions.AUTH, auth: res.data });
        yield put({ type: accountActions.PRORFILE, profile: res.data.data });
      } else {
        yield put({
          type: actions.AUTH_ERROR,
          error: {
            message: Error[res.data.result],
            status: true
          }
        });
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}
export function* clearAccountErrorSaga() {
  yield takeEvery(actions.CLEAR_AUTH_ERROR, function*() {
    yield put({ type: actions.AUTH_ERROR, error: { message: '', status: false } });
  });
}
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
