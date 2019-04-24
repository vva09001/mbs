import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

export function* clearErrorSaga() {
  yield takeEvery(actions.CLEAR_ERROR, function*() {
    yield put({ type: actions.DONE, done: { message: '', status: false } });
    yield put({ type: actions.ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([fork(clearErrorSaga)]);
}
