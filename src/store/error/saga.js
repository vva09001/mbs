import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

export function* clearErrorSaga() {
  yield takeEvery(actions.CLEAR_ERROR, function*() {
    yield put({ type: actions.BUY_DONE, done: { message: '', status: false } });
    yield put({ type: actions.SELL_DONE, done: { message: '', status: false } });
    yield put({ type: actions.TRADE_DONE, done: { message: '', status: false } });
    yield put({ type: actions.TRADE_EDIT_DONE, done: { message: '', status: false } });
    yield put({ type: actions.ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([fork(clearErrorSaga)]);
}
