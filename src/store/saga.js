import { all } from 'redux-saga/effects';
import bondsSagas from './bonds/saga';
import buySagas from './buy/saga';

export default function* rootSaga() {
  yield all([bondsSagas(), buySagas()]);
}
