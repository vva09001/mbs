import actions from './actions';
import accountActions from 'store/account/actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { PaymentGateway, VerifyResult } from 'services/auth';
import { Info, Flow, FlowCash, Update, Contract } from 'services/buy';
import Error from 'utils/error';
import history from 'utils/history';
import { accountProfile, buyGetContract, getToken, buyVolMax, buyVolMin } from 'store/selectors';

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
      // Set condition
      if (profile.isExist === 0) {
        params.userId = null;
      }
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
      // Set condition
      if (profile.isExist === 0) {
        params.userId = null;
      }
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

export function* updateBuySaga() {
  yield takeEvery(actions.BUY_UPDATE, function*(data) {
    try {
      const volMax = yield select(buyVolMax);
      const volMin = yield select(buyVolMin);
      const profile = yield select(accountProfile);
      const token = yield select(getToken);
      // Check link condition
      if (profile.isExist === 0) {
        yield put({
          type: accountActions.ACCOUNT_ERROR,
          error: {
            message: `Tài khoản chưa liên kết`,
            status: true
          }
        });
        yield put({ type: accountActions.LINK_STEP, step: 1 });
        yield history.push({ pathname: '/user/connect' });
        // Check amount condition
      } else if (
        data.params.amount === 0 ||
        data.params.amount <= volMin ||
        data.params.amount >= volMax
      ) {
        yield put({
          type: actions.BUY_ERROR,
          error: {
            message: `Số lượng TP phải lớn hơn ${volMin} và nhỏ hơn ${volMax}`,
            status: true
          }
        });
      } else {
        yield put({ type: actions.BUY_LOADING, loading: true });
        // Get request
        const params = {
          userId: profile.userId,
          channel: profile.channel,
          code: data.params.code,
          volume: data.params.amount
        };
        const res = yield Update(params, token);
        // handle request
        if (res.data.result === 0) {
          yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
          yield history.push({ pathname: '/buy/order/' });
        } else {
          yield put({
            type: actions.BUY_ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
        yield put({ type: actions.BUY_LOADING, loading: false });
      }
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
        return_url: process.env.REACT_APP_URL + '/buy/verify/',
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
        const token = yield select(getToken);
        const params = {
          merchant_code: data.params.merchant_code,
          billcode: data.params.billcode,
          error_code: data.params.error_code,
          order_id: data.params.order_id,
          payment_status: data.params.payment_status,
          trans_amount: data.params.trans_amount,
          vt_transaction_id: data.params.vt_transaction_id,
          service: 'BOND',
          check_sum: data.params.check_sum
        };
        const res = yield VerifyResult(params, token);
        // handle request
        if (res.data.result === 0) {
          yield put({
            type: actions.BUY_ERROR,
            error: { message: 'Success', status: true }
          });
          yield history.push({ pathname: '/' });
        } else {
          yield put({
            type: actions.BUY_ERROR,
            error: { message: Error[res.data.result], status: true }
          });
          yield history.push({ pathname: '/' });
        }
      } else {
        yield put({
          type: actions.BUY_ERROR,
          error: { message: 'Failed', status: true }
        });
        yield history.push({ pathname: '/' });
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
    fork(updateBuySaga),
    fork(getContractSaga),
    fork(verifyBuySaga),
    fork(clearBuyErrorSaga)
  ]);
}
