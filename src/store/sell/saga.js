import actions from './actions';
import bondsActions from '../bonds/actions';
import { all, fork, put, takeEvery, take, select } from 'redux-saga/effects';
import Error from 'utils/error';
import { List, Info, Date, Update } from 'services/sell';
import history from 'utils/history';
import { accountProfile, sellDate, sellBook, getToken } from 'store/selectors';

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
      // Set condition
      const res = yield List(params, token);

      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.SELL_TOTAL, total: res.data.data.totalValue });
        yield put({ type: actions.SELL_LIST, list: res.data.data.data });
      } else {
        if (res.data.result === -1010) {
          yield history.push({ pathname: '/user/connect/' });
        }
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

export function* sellInfoSaga() {
  yield takeEvery(actions.SELL_INFO_GET, function*(data) {
    try {
      yield put({ type: actions.SELL_LOADING });

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
        yield put({ type: actions.SELL_INFO, info: res.data.data });
      } else {
        yield put({
          type: actions.SELL_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.SELL_LOADING });
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}
export function* sellGetDateSaga() {
  yield takeEvery(actions.SELL_DATE_REQUEST, function*(data) {
    try {
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Date(params, token);

      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.SELL_DATE, date: res.data.data });
      } else {
        yield put({
          type: actions.SELL_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}
export function* sellGetContractSaga() {
  yield takeEvery(actions.SELL_CONTRACT_REQUEST, function*(data) {
    try {
      // Get Detail bonds
      const detailParams = {
        code: data.params.bondCode
      };
      yield put({ type: bondsActions.BONDS_GET, params: detailParams });

      // Get SellDate list
      const dateParams = {
        contractCode: data.params.contractCode
      };
      yield put({ type: actions.SELL_DATE_REQUEST, params: dateParams });
      yield take(actions.SELL_DATE);
      // Get Info first time
      const sell_Date = yield select(sellDate);
      const infoParams = {
        contractCode: data.params.contractCode,
        sellDate: sell_Date[0].termDate
      };
      yield put({ type: actions.SELL_INFO_GET, params: infoParams });
      yield history.push({ pathname: '/sell/order/' });
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}
export function* sellBookSaga() {
  yield takeEvery(actions.SELL_BOOK_REQUEST, function*(data) {
    yield put({ type: actions.SELL_BOOK, book: data.params });
    yield history.push({ pathname: '/sell/confirm/' });
  });
}
export function* sellUpdateSaga() {
  yield takeEvery(actions.SELL_UPDATE_REQUEST, function*() {
    try {
      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const book = yield select(sellBook);
      const params = {
        ...book,
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Update(params, token);

      // handle request
      if (res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.SELL_DONE, sell_done: true });
        yield history.push({ pathname: '/' });
      } else {
        yield put({
          type: actions.SELL_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
        yield history.push({ pathname: '/' });
      }
    } catch (error) {
      yield put({ type: actions.SELL_ERROR, error: error.message });
    }
  });
}
export function* clearSellErrorSaga() {
  yield takeEvery(actions.CLEAR_SELL_ERROR, function*() {
    yield put({ type: actions.SELL_DONE, sell_done: false });
    yield put({ type: actions.SELL_ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([
    fork(sellListSaga),
    fork(sellInfoSaga),
    fork(sellGetContractSaga),
    fork(sellGetDateSaga),
    fork(sellBookSaga),
    fork(sellUpdateSaga),
    fork(clearSellErrorSaga)
  ]);
}
