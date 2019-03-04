import { all } from 'redux-saga/effects';
import bondsSagas from './bonds/saga';

export default function* rootSaga() {
  yield all([bondsSagas()]);
}
