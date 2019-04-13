import { all } from 'redux-saga/effects';
import accountSagas from 'store/account/saga';
import authSagas from 'store/auth/saga';
import bondsSagas from 'store/bonds/saga';
import buySagas from 'store/buy/saga';
import sellSagas from 'store/sell/saga';
import tradeSagas from 'store/trade/saga';

export default function* rootSaga() {
  yield all([accountSagas(), authSagas(), bondsSagas(), buySagas(), sellSagas(), tradeSagas()]);
}
