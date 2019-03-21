import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { buyInfo, buyFlow } from '../../services/sell';

export function* buyFlowSaga() {
  yield takeEvery(actions.BUY_FLOW_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING });

      // Get request
      const res = yield buyFlow(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BUY_FLOW, list: res.data.data.data });
      }

      yield put({ type: actions.BUY_LOADING });
    } catch (error) {
      yield put({ type: actions.BONDS_ERROR, error: error.message });
    }
  });
}

export function* buyInfoSaga() {
  yield takeEvery(actions.BONDS_GET, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING });

      // get request
      const res = yield buyInfo(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BONDS_DETAIL, detail: res.data.data });
      }

      yield put({ type: actions.BONDS_LOADING });
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(buyFlowSaga), fork(buyInfoSaga)]);
}
