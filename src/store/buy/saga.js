import actions from './actions';
import errorActions from 'store/error/actions';
import { all, fork, put, takeEvery, select, take } from 'redux-saga/effects';
import { PaymentGateway, VerifyResult } from 'services/auth';
import { Info, Flow, FlowCash, Update } from 'services/buy';
import Error from 'utils/error';
import VT_error from 'utils/viettel_error';
import history from 'utils/history';
import {
  accountProfile,
  buyInfo,
  getToken,
  buyVolMax,
  buyVolMin,
  buyGetParams,
  bondsDetail
} from 'store/selectors';

// update params
export function* updateBuyParamsSaga() {
  yield takeEvery(actions.BUY_PARAMS_REQUEST, function*(data) {
    yield put({ type: actions.BUY_PARAMS, params: data.params });
  });
}
// Get flow saga
export function* getBuyInfoSaga() {
  yield takeEvery(actions.BUY_INFO_GET, function*(data) {
    try {
      yield put({ type: actions.BUY_INFO_LOADING, loading: true });
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
      const res = yield Info(params, token);
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          if (res.data.data.buyVolMin > res.data.data.roomBalance) {
            res.data.data.buyVolMin = res.data.data.roomBalance;
          }
          yield put({ type: actions.BUY_INFO, info: res.data.data });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }

      yield put({ type: actions.BUY_FLOW_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

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
      if (resFlow.status === 200) {
        if (resFlow.data.result === 0) {
          yield put({ type: actions.BUY_FLOW, flow: resFlow.data.data });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[resFlow.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: resFlow.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }
      yield put({ type: actions.BUY_FLOW_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
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
      // Call 'info saga'
      yield put({
        type: actions.BUY_INFO_GET,
        params: data.params
      });

      // get info data
      yield take(actions.BUY_INFO);
      const volMin = yield select(buyVolMin);
      const info = yield select(buyInfo);

      // Call 'flow saga'
      yield put({
        type: actions.BUY_FLOW_GET,
        params: { ...data.params, volume: volMin }
      });

      // set params
      yield put({
        type: actions.BUY_PARAMS_REQUEST,
        params: { volume: volMin, sum: volMin * info.buyPrice }
      });

      // Handle request flowCash
      const resFlowCash = yield FlowCash(params, token);
      if (resFlowCash.status === 200) {
        if (resFlowCash.data.result === 0) {
          yield put({ type: actions.BUY_FLOW_CASH, flowCash: resFlowCash.data.data });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[resFlowCash.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: resFlowCash.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }
      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

// Check Mount buy
export function* checkMountBuySaga() {
  yield takeEvery(actions.BUY_CHECK_MOUNT, function*() {
    const volMax = yield select(buyVolMax);
    const volMin = yield select(buyVolMin);
    const params = yield select(buyGetParams);
    const profile = yield select(accountProfile);
    if (params.volume === 0 || params.volume < volMin || params.volume > volMax) {
      yield put({
        type: errorActions.ERROR,
        error: {
          message: `Số lượng Trái Phiếu phải lớn hơn ${volMin} và nhỏ hơn ${volMax}`,
          status: true
        }
      });
    } else if (params.sum > 100000000) {
      yield put({
        type: errorActions.ERROR,
        error: {
          message: `Giá Trị Giao Dịch vượt quá giới hạn thanh toán tiền trong TK ViettelPay (tối đa 100 triệu/giao dịch). Quý khách vui lòng chọn Khối Lượng nhỏ hơn.`,
          status: true
        }
      });
    } else {
      if (profile.isExist === 1) {
        yield history.push({ pathname: '/buy/order/' });
      } else {
        yield history.push({ pathname: '/user/connect/' });
      }
    }
  });
}
export function* updateBuySaga() {
  yield takeEvery(actions.BUY_UPDATE, function*() {
    try {
      const params = yield select(buyGetParams);
      const bond = yield select(bondsDetail);
      const profile = yield select(accountProfile);
      const token = yield select(getToken);
      // Check link condition

      yield put({ type: actions.BUY_LOADING, loading: true });
      // Get request
      const param = {
        userId: profile.userId,
        channel: profile.channel,
        code: bond.bondCode,
        volume: params.volume
      };
      const res = yield Update(param, token);
      // handle request
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          yield put({ type: actions.BUY_CONTRACT, contract: res.data.data });
          yield history.push({ pathname: '/buy/order/' });
        } else {
          // Check if account is not connected
          if (res.data.result === -1010) {
            yield history.push({ pathname: '/user/connect/' });
          } else {
            yield put({
              type: errorActions.ERROR,
              error: { message: Error[res.data.result], status: true }
            });
          }
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }
      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* getContractSaga() {
  yield takeEvery(actions.BUY_GET_CONTRACT, function*() {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Select state
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const info = yield select(buyInfo);
      const param = yield select(buyGetParams);

      // update Contract
      const params = {
        userId: profile.userId,
        channel: profile.channel,
        code: info.bondCode,
        volume: param.volume
      };
      const res = yield Update(params, token);
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          // Payment link params - request
          const paramsPayment = {
            command: 'PAYMENT',
            contractCode: res.data.data.contractCode,
            cancel_url: process.env.REACT_APP_URL + '/buy/verify/',
            return_url: process.env.REACT_APP_URL + '/buy/verify/',
            trans_amount: res.data.data.buyValue,
            version: '2.0'
          };
          const resPayment = yield PaymentGateway(paramsPayment, token);

          // handle request
          if (resPayment.status === 200) {
            if (resPayment.data.result === 0 && resPayment.data.result !== null) {
              yield (window.location = resPayment.data.data.url);
            } else {
              yield put({
                type: errorActions.ERROR,
                error: { message: Error[resPayment.data.result], status: true }
              });
              yield history.push({ pathname: '/' });
            }
          } else {
            yield put({
              type: errorActions.ERROR,
              error: { message: resPayment.data.message, status: true }
            });
            yield history.push({ pathname: '/' });
          }
        } else {
          // Check if account is not connected
          if (res.data.result === -1010) {
            yield history.push({ pathname: '/user/connect/' });
          } else {
            yield put({
              type: errorActions.ERROR,
              error: { message: Error[res.data.result], status: true }
            });
          }
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
        yield history.push({ pathname: '/' });
      }
      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* verifyBuySaga() {
  yield takeEvery(actions.BUY_VERIFY_RESULT, function*(data) {
    try {
      yield put({ type: actions.BUY_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const params = {
        ...data.params,
        service: 'BOND'
      };
      const res = yield VerifyResult(params, token);
      // handle request
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          if (data.params.error_code === '00') {
            yield put({
              type: errorActions.BUY_DONE,
              done: {
                message:
                  'Quý khách đã đăng ký mua TP thành công. Chi tiết giao dịch tại màn hình Danh mục TP nắm giữ.',
                status: true
              }
            });
          } else {
            yield put({
              type: errorActions.ERROR,
              error: { message: VT_error.trade[data.params.error_code], status: true }
            });
          }
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: res.data.message, status: true }
        });
      }
      yield history.push({ pathname: '/' });
      yield put({ type: actions.BUY_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(buyFetchSaga),
    fork(updateBuyParamsSaga),
    fork(getBuyInfoSaga),
    fork(getBuyFlowSaga),
    fork(updateBuySaga),
    fork(checkMountBuySaga),
    fork(getContractSaga),
    fork(verifyBuySaga)
  ]);
}
