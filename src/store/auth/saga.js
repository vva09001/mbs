import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Authentication } from 'services/auth';
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
      const params = data.params;
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
          type: errorActions.ERROR_REQUEST,
          error: res
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
