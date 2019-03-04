import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { list, get } from '../../services/coin';

export function* bondsList() {
  yield takeEvery(actions.BONDS_LIST, function*() {
    try {
      const response = yield list();
      if (response.status === 200) {
        yield put({ type: actions.BONDS, list: response.data.data });
      }
    } catch (error) {
      yield put({ type: actions.BONDS_ERROR, error: error.message });
    }
  });
}

export function* bondsGet() {
  yield takeEvery(actions.BONDS_GET, function*(data) {
    try {
      // get request
      const response = yield get(data.id);

      //handle request
      if (response.status === 200) {
        yield put({ type: actions.BONDS_DETAIL, detail: response.data });
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(bondsList), fork(bondsGet)]);
}
