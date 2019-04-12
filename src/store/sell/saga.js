import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import Error from '../../utils/error';
import { List, Info, Flow } from '../../services/sell';
import { accountProfile, getToken } from '../selectors';

export function* sellListSaga() {
  yield takeEvery(actions.SELL_LIST_GET, function*(data) {
    try {
      yield put({ type: actions.SELL_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield List(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.SELL_LIST, list: res.data.data.data });
      }

      yield put({ type: actions.SELL_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}

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
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Info(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.SELL_INFO, list: res.data.data });
      } else {
        yield put({
          type: actions.SELL_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.BONDS_LOADING });
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export function* sellGetContractSaga() {
  yield takeEvery(actions.SELL_CONTRACT_REQUEST, function*(data) {
    try {
      yield put({ type: actions.SELL_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Info(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.SELL_CONTRACT, list: res.data.data });
      } else {
        yield put({
          type: actions.SELL_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.SELL_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(sellListSaga),
    fork(sellFlowSaga),
    fork(sellInfoSaga),
    fork(sellGetContractSaga)
  ]);
}
