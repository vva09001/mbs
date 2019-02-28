import { all } from 'redux-saga/effects';
import userSagas from './user/saga';
import coinSagas from './coin/saga';

export default function* rootSaga() {
  yield all([userSagas(), coinSagas()]);
}
