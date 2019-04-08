import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { Info, Flow, FlowCash, Update, Contract, Approve } from '../../services/buy';
import history from '../../utils/history';
import {
  accountProfile,
  buyGetBook,
  buyGetContract,
  getToken,
  buyVolMax,
  buyVolMin
} from '../selectors';

export function* buyFetchSaga() {
  yield takeEvery(actions.BUY_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const resFlow = yield Flow(params, token);
      const resFlowCash = yield FlowCash(params, token);
      const resInfo = yield Info(params, token);

      // handle request
      if (resFlow.data.result === 0) {
        yield put({ type: actions.BUY_FLOW, flow: resFlow.data.data });
      }
      if (resFlowCash.status === 200) {
        yield put({ type: actions.BUY_FLOW_CASH, flowCash: resFlowCash.data.data });
      }
      if (resFlow.data.result === 0) {
        yield put({ type: actions.BUY_INFO, info: resInfo.data.data });
      }

      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* setBuySaga() {
  yield takeEvery(actions.SET_BUY, function*(data) {
    // Get Condition
    const volMax = yield select(buyVolMax);
    const volMin = yield select(buyVolMin);

    // Check amount condition
    if (data.params.amount !== 0 && data.params.amount > volMin && data.params.amount < volMax) {
      yield put({ type: actions.BUY_BOOK, book: data.params });
      yield history.push({ pathname: '/buy/order/' });
    } else {
      yield put({
        type: actions.BUY_ERROR,
        error: `Số lượng TP phải lớn hơn ${volMin} và nhỏ hơn ${volMax}`
      });
    }
  });
}

export function* updateBuySaga() {
  yield takeEvery(actions.BUY_UPDATE, function*() {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const book = yield select(buyGetBook);
      const params = {
        userId: profile.userId,
        channel: profile.channel,
        code: book.code,
        volume: book.amount
      };
      const res = yield Update(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
      }

      yield put({ type: actions.BUY_LOADING, loading: false });
      yield history.push({ pathname: '/buy/confirm/' });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* getContractSaga() {
  yield takeEvery(actions.BUY_GET_CONTRACT, function*() {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const account = yield select(accountProfile);
      const contract = yield select(buyGetContract);

      const params = {
        userId: account.userId,
        channel: account.channel,
        contractCode: contract.contractCode
      };
      const res = yield Contract(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
      }

      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* approveBuySaga() {
  yield takeEvery(actions.BUY_APPROVE, function*() {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // // select book and contract code
      // const book = yield select(buyGetBook);
      // const contract = yield select(buyGetContract);
      //
      // // Get request
      // const params = {
      //   userId: book.userId,
      //   channel: book.channel,
      //   contractCode: contract.contractCode
      // };
      // const res = yield Approve(params);
      //
      // // handle request
      // if (res.data.result === 0) {
      //   yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
      // }

      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(buyFetchSaga),
    fork(setBuySaga),
    fork(updateBuySaga),
    fork(getContractSaga),
    fork(approveBuySaga)
  ]);
}
