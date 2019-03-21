import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Info, Flow } from '../../services/buy';

export function* buyFlowSaga() {
  yield takeEvery(actions.BUY_FLOW_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING });

      // Get request
      const res = yield Flow(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BUY_FLOW, flow: res.data.data.data });
      }

      yield put({ type: actions.BUY_LOADING });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* buyInfoSaga() {
  yield takeEvery(actions.BUY_INFO_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING });

      // get request
      const res = yield Info(data.params);

      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BUY_INFO, info: res.data.data });
      }

      yield put({ type: actions.BUY_LOADING });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(buyFlowSaga), fork(buyInfoSaga)]);
}
