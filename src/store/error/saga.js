import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import Error from 'utils/error';
import history from 'utils/history';

export function* errorRequestSaga() {
  yield takeEvery(actions.ERROR_REQUEST, function*(data) {
    const res = data.error;
    switch (res.status) {
      case 200:
        yield put({
          type: actions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
        yield history.push({ pathname: '/' });
        break;
      case 401:
        yield put({ type: actions.ERROR, error: { message: Error['401'], status: true } });
        yield history.push({ pathname: '/' });
        break;
      default:
        yield put({ type: actions.ERROR, error: { message: Error['-99999'], status: true } });
        yield history.push({ pathname: '/' });
        break;
    }
  });
}

export function* clearErrorSaga() {
  yield takeEvery(actions.CLEAR_ERROR, function*() {
    yield put({ type: actions.BUY_DONE, done: { message: '', status: false } });
    yield put({ type: actions.SELL_DONE, done: { message: '', status: false } });
    yield put({ type: actions.TRADE_DONE, done: { message: '', status: false } });
    yield put({ type: actions.TRADE_EDIT_DONE, done: { message: '', status: false } });
    yield put({ type: actions.ERROR, error: { message: '', message2: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([fork(clearErrorSaga), fork(errorRequestSaga)]);
}
