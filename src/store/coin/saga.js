import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { list, get } from '../../services/coin';

export function* coinList() {
  yield takeEvery(actions.COIN_LIST, function*() {
    try {
      const response = yield list();
      if (response.status === 200) {
        yield put({ type: actions.COIN, list: response.data.data });
      }
    } catch (error) {
      yield put({ type: actions.COIN_ERROR, error: error.message });
    }
  });
}

export function* coinGet() {
  yield takeEvery(actions.COIN_GET, function*(data) {
    try {
      // get request
      const response = yield get(data.id);

      //handle request
      if (response.status === 200) {
        yield put({ type: actions.COIN_DETAIL, detail: response.data });
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(coinList), fork(coinGet)]);
}
