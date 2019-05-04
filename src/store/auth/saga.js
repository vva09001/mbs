import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Authentication } from 'services/auth';
import Error from 'utils/error';
import {
  accountActions,
  errorActions,
  buyActions,
  sellActions,
  tradeActions,
  bondsActions
} from 'store/actions';

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
        yield put({ type: buyActions.BUY_RESET });
        yield put({ type: sellActions.SELL_RESET });
        yield put({ type: tradeActions.TRADE_RESET });
        yield put({ type: bondsActions.BONDS_RESET });
      } else {
        yield put({
          type: errorActions.ERROR,
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
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
