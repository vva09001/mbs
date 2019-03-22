import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Info, Flow } from '../../services/buy';

export function* buyFetchSaga() {
  yield takeEvery(actions.BUY_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING });

      // Get request
      // const resFlow = yield Flow(data.params);
      // const resInfo = yield Info(data.params);

      // handle request
      // if (resFlow.status === 200) {
      //   yield put({ type: actions.BUY_FLOW, flow: resFlow.data.data.data });
      // }
      // if (resInfo.status === 200) {
      //   yield put({ type: actions.BUY_INFO, info: resInfo.data.data });
      // }

      yield put({ type: actions.BUY_LOADING });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* buyInfoSaga() {
  yield takeEvery(actions.BUY_INFO_GET, function*(data) {
    try {


      // get request


      // handle request



    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(buyFetchSaga)]);
}
