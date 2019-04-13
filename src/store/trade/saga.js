import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import Error from 'utils/error';
import { List, Detail, Change, Delete } from 'services/trade';
import { Date } from 'services/sell';
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
      if (res.data.result === 0) {
        yield put({ type: actions.TRADE_LIST, list: res.data.data.data });
      } else {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.TRADE_ERROR, error: error.message });
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
      if (res.data.result === 0) {
        yield put({ type: actions.TRADE_DETAIL, detail: res.data.data });

        // get date by contract code Buy
        yield put({
          type: actions.TRADE_DATE_REQUEST,
          params: { contractCode: res.data.data.buyContractCode }
        });

        // Move to action page
        yield history.push({ pathname: '/trade/' + data.params.type });
      } else {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.TRADE_ERROR, error: error.message });
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
      if (res.data.result === 0) {
        yield put({ type: actions.TRADE_DATE, date: res.data.data });
      } else {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }
    } catch (error) {
      yield put({ type: actions.TRADE_ERROR, error: error.message });
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
          type: actions.TRADE_ERROR,
          error: { message: 'Xoá thành công', status: true }
        });
        yield history.push({ pathname: '/' });
      } else {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.TRADE_ERROR, error: error.message });
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
      if (res.data.result === 0) {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: 'Sửa thành công', status: true }
        });
        yield history.push({ pathname: '/' });
      } else {
        yield put({
          type: actions.TRADE_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.TRADE_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.TRADE_ERROR, error: error.message });
    }
  });
}

export function* clearTradeErrorSaga() {
  yield takeEvery(actions.CLEAR_TRADE_ERROR, function*() {
    yield put({ type: actions.TRADE_ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([
    fork(tradeListSaga),
    fork(tradeDetailSaga),
    fork(sellGetDateSaga),
    fork(tradeDeleteSaga),
    fork(tradeUpdateSaga),
    fork(clearTradeErrorSaga)
  ]);
}
