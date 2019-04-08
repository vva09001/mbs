import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { Info, Flow } from '../../services/sell';
import { getToken } from '../selectors';

export function* sellFlowSaga() {
  yield takeEvery(actions.SELL_FLOW_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING });

      // Get request
      const token = yield select(getToken);
      const res = yield Flow(data.params, token);

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

export function* sellInfoSaga() {
  yield takeEvery(actions.SELL_INFO_GET, function*(data) {
    try {
      yield put({ type: actions.BONDS_LOADING });

      // get request
      const token = yield select(getToken);
      const res = yield Info(data.params, token);

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
  yield all([fork(sellFlowSaga), fork(sellInfoSaga)]);
}
