import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { PaymentGateway, VerifyResult } from '../../services/auth';
import { Info, Flow, FlowCash, Update, Contract } from '../../services/buy';
import Error from '../../utils/error';
import history from '../../utils/history';
import {
  accountProfile,
  buyGetBook,
  buyGetContract,
  getToken,
  buyVolMax,
  buyVolMin
} from '../selectors';

// Get flow saga
export function* getBuyFlowSaga() {
  yield takeEvery(actions.BUY_FLOW_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_FLOW_LOADING, loading: true });
      // Handle request flow
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const resFlow = yield Flow(params, token);
      if (resFlow.data.result === 0) {
        yield put({ type: actions.BUY_FLOW, flow: resFlow.data.data });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[resFlow.data.result], status: true }
        });
      }

      yield put({ type: actions.BUY_FLOW_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

// Get detail, info
export function* buyFetchSaga() {
  yield takeEvery(actions.BUY_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Setup params
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };

      // handle request info
      const resInfo = yield Info(params, token);
      if (resInfo.data.result === 0) {
        yield put({ type: actions.BUY_INFO, info: resInfo.data.data });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[resInfo.data.result], status: true }
        });
      }
      // Call 'flow saga'
      yield put({
        type: actions.BUY_FLOW_GET,
        params: { ...data.params, volume: resInfo.data.data.buyVolMin }
      });

      // Handle request flowCash
      const resFlowCash = yield FlowCash(params, token);
      if (resFlowCash.status === 200) {
        yield put({ type: actions.BUY_FLOW_CASH, flowCash: resFlowCash.data.data });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[resFlowCash.data.result], status: true }
        });
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
    if (data.params.amount !== 0 && data.params.amount >= volMin && data.params.amount <= volMax) {
      yield put({ type: actions.BUY_BOOK, book: data.params });
      yield history.push({ pathname: '/buy/order/' });
    } else {
      yield put({
        type: actions.BUY_ERROR,
        error: {
          message: `Số lượng TP phải lớn hơn ${volMin} và nhỏ hơn ${volMax}`,
          status: true
        }
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
        yield history.push({ pathname: '/buy/confirm/' });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }
      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* getContractSaga() {
  yield takeEvery(actions.BUY_GET_CONTRACT, function*() {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Select state
      const token = yield select(getToken);
      const account = yield select(accountProfile);
      const contract = yield select(buyGetContract);
      // Get request
      const params = {
        userId: account.userId,
        channel: account.channel,
        contractCode: contract.contractCode
      };
      const res = yield Contract(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
        yield put({ type: actions.BUY_LOADING, loading: false });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
        yield history.push({ pathname: '/' });
      }

      // Payment link params - request
      const paramsPayment = {
        command: 'PAYMENT',
        contractCode: contract.contractCode,
        return_url: process.env.REACT_APP_URL + '/',
        trans_amount: contract.buyVol,
        version: '2.0'
      };
      const resPayment = yield PaymentGateway(paramsPayment, token);

      // handle request
      if (resPayment.data.result === 0) {
        yield put({ type: actions.BUY_PAYMENT_LINK, link: resPayment.data.data.url });
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: Error[resPayment.data.result], status: true }
        });
        yield history.push({ pathname: '/' });
      }
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* verifyBuySaga() {
  yield takeEvery(actions.BUY_VERIFY_RESULT, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });
      if (data.params.error_code === '00') {
        // Get request
        const params = {
          ...data.params,
          merchant_code: 'Viettel'
        };
        const res = yield VerifyResult(params);
        // handle request
        if (res.data.result === 0) {
          yield put({
            type: actions.BUY_ERROR,
            error: { message: 'Success', status: true }
          });
        } else {
          yield put({
            type: actions.BUY_ERROR,
            error: { message: 'Failed', status: true }
          });
        }
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: 'Failed', status: true }
        });
      }

      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUY_ERROR, error: error.message });
    }
  });
}

export function* clearBuyErrorSaga() {
  yield takeEvery(actions.CLEAR_BUY_ERROR, function*() {
    yield put({ type: actions.BUY_ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([
    fork(buyFetchSaga),
    fork(getBuyFlowSaga),
    fork(setBuySaga),
    fork(updateBuySaga),
    fork(getContractSaga),
    fork(verifyBuySaga),
    fork(clearBuyErrorSaga)
  ]);
}
