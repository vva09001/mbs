import { all } from 'redux-saga/effects';
import accountSagas from './account/saga';
import authSagas from './auth/saga';
import bondsSagas from './bonds/saga';
import buySagas from './buy/saga';
import sellSagas from './sell/saga';

export default function* rootSaga() {
  yield all([accountSagas(), authSagas(), bondsSagas(), buySagas(), sellSagas()]);
}
