import actions from './actions';
import errorActions from 'store/error/actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import Error from 'utils/error';
import { List, Detail, Change, Delete } from 'services/trade';
import { Date, Info } from 'services/sell';
import history from 'utils/history';
import { accountProfile, getToken, tradeCode } from 'store/selectors';

export function* tradeListSaga() {
  yield takeEvery(actions.TRADE_LIST_REQUEST, function*(data) {
    try {
      yield put({ type: actions.TRADE_LOADING, loading: true });

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
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.TRADE_LIST, list: res.data.data.data });
      } else {
        if (res.data.result === -1010) {
          yield history.push({ pathname: '/user/connect/' });
        } else {
          yield put({
            type: errorActions.ERROR,
            error: { message: Error[res.data.result], status: true }
          });
        }
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* tradeDetailSaga() {
  yield takeEvery(actions.TRADE_DETAIL_REQUEST, function*(data) {
    try {
      yield put({ type: actions.TRADE_LOADING, loading: true });
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        contractCode: data.params.contractCode,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Detail(params, token);
      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.TRADE_DETAIL, detail: res.data.data });

        // get date by contract code Buy
        yield put({
          type: actions.TRADE_DATE_REQUEST,
          params: { contractCode: res.data.data.buyContractCode }
        });

        // Get info by contractCode and sellDate
        yield put({
          type: actions.TRADE_INFO_REQUEST,
          params: { contractCode: res.data.data.buyContractCode, sellDate: res.data.data.sellDate }
        });

        // Move to action page
        yield history.push({ pathname: '/trade/' + data.params.type });
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* tradeInfoSaga() {
  yield takeEvery(actions.TRADE_INFO_REQUEST, function*(data) {
    try {
      yield put({ type: actions.TRADE_LOADING });

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
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.TRADE_INFO, info: res.data.data });
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* sellGetDateSaga() {
  yield takeEvery(actions.TRADE_DATE_REQUEST, function*(data) {
    try {
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        contractCode: data.params.contractCode,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Date(params, token);

      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.TRADE_DATE, date: res.data.data });
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export function* tradeDeleteSaga() {
  yield takeEvery(actions.TRADE_DELETE_REQUEST, function*() {
    try {
      yield put({ type: actions.TRADE_LOADING, loading: true });
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const contractCode = yield select(tradeCode);
      const params = {
        contractCode: contractCode,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Delete(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({
          type: errorActions.TRADE_DONE,
          done: {
            message:
              'Quý khách đã hủy giao dịch bán TP thành công. Quý khách có thể xem lại thông tin giao dịch mua TP này tại màn hình Danh mục TP nắm giữ',
            status: true
          }
        });
        yield history.push({ pathname: '/' });
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export function* tradeUpdateSaga() {
  yield takeEvery(actions.TRADE_CHANGE_REQUEST, function*(data) {
    try {
      yield put({ type: actions.TRADE_LOADING, loading: true });
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const contractCode = yield select(tradeCode);
      const params = {
        contractCode: contractCode,
        sellDate: data.params.sellDate,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Change(params, token);

      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({
          type: errorActions.TRADE_DONE,
          done: {
            message:
              'Quý khách đã sửa giao dịch bán TP thành công. Quý khách có thể xem lại thông tin giao dịch này tại màn hình Quản lý Giao dịch',
            status: true
          }
        });
        yield history.push({ pathname: '/trade/' });
      } else {
        yield put({
          type: errorActions.ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(tradeListSaga),
    fork(tradeDetailSaga),
    fork(sellGetDateSaga),
    fork(tradeInfoSaga),
    fork(tradeDeleteSaga),
    fork(tradeUpdateSaga)
  ]);
}
