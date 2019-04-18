import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { CheckLink, Link, List, Info } from 'services/account';
import { accountProfile, getToken, accountStep, bondsDetail } from 'store/selectors';
import Error from 'utils/error';
import history from 'utils/history';

export function* accountCheckLinkSaga() {
  yield takeEvery(actions.CHECK_LINK_REQUEST, function*(data) {
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        mobile: profile.userId,
        userId: profile.userId,
        channel: profile.channel,
        customerType: 'INDIVIDUAL',
        type: 0
      };
      const res = yield CheckLink(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.LINK_STEP_DATA, data: params });
        yield put({ type: actions.LINK_STEP, step: 2 });
      } else {
        yield put({
          type: actions.ACCOUNT_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.ACCOUNT_ERROR, error: error.message });
    }
  });
}
export function* accountLinkSaga() {
  yield takeEvery(actions.LINK_REQUEST, function*(data) {
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const accoun_step = yield select(accountStep);
      const bonds = yield select(bondsDetail);

      const params = {
        accountCode: accoun_step.accountCode,
        otp: data.params.otp,
        mobile: profile.userId,
        userId: profile.userId,
        partnerCode: 'VIETTEL',
        channel: profile.channel
      };
      const res = yield Link(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.LINK_STEP, step: 3 });
        yield put({ type: actions.PRORFILE, profile: { ...profile, isExist: 1 } });
        yield history.push({ pathname: '/buy/' + bonds.bondCode });
      } else {
        yield put({
          type: actions.ACCOUNT_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.ACCOUNT_ERROR, error: error.message });
    }
  });
}

export function* accountBondsSaga() {
  yield takeEvery(actions.ACCOUNT_LIST_REQUEST, function*(data) {
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

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
        yield put({ type: actions.ACCOUNT_LIST, list: res.data.data.data });
      } else {
        yield put({
          type: actions.ACCOUNT_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.ACCOUNT_ERROR, error: error.message });
    }
  });
}
export function* accountInfoSaga() {
  yield takeEvery(actions.ACCOUNT_INFO_REQUEST, function*() {
    console.log(1)
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        userId: profile.userId,
        channel: profile.channel
      };
      const res = yield Info(params, token);

      // handle request
      if (res.data.result === 0) {
        yield put({ type: actions.ACCOUNT_INFO, total: res.data.data.totalCastInvest });
      } else {
        yield put({
          type: actions.ACCOUNT_ERROR,
          error: { message: Error[res.data.result], status: true }
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.ACCOUNT_ERROR, error: error.message });
    }
  });
}

export function* clearAccountErrorSaga() {
  yield takeEvery(actions.CLEAR_ACCOUNT_ERROR, function*() {
    yield put({ type: actions.ACCOUNT_ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([
    fork(accountCheckLinkSaga),
    fork(accountLinkSaga),
    fork(accountInfoSaga),
    fork(clearAccountErrorSaga),
    fork(accountBondsSaga)
  ]);
}
