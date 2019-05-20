import actions from './actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import { CheckLink, Link, List, Info } from 'services/account';
import { accountProfile, getToken, accountStep } from 'store/selectors';
import Error from 'utils/error';
import history from 'utils/history';
import { errorActions } from 'store/actions';

export function* accountCheckLinkSaga() {
  yield takeEvery(actions.CHECK_LINK_REQUEST, function*(data) {
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        ...data.params,
        customerId: profile.customerId,
        mobile: profile.userId,
        userId: profile.userId,
        channel: profile.channel,
        customerType: 'INDIVIDUAL',
        type: 0
      };
      const res = yield CheckLink(params, token);
      // handle request
      if (res.status === 200 && res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.LINK_STEP, step: 2 });
        yield put({ type: actions.LINK_STEP_DATA, data: params });
      } else {
        yield put({
          type: errorActions.ERROR_REQUEST,
          error: res
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
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
      if (res.status === 200 && res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.LINK_STEP, step: 1 });
        yield put({ type: actions.PRORFILE, profile: { ...profile, isExist: 1 } });
        yield history.goBack();
      } else {
        yield put({
          type: errorActions.ERROR_REQUEST,
          error: res
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
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
      if (res.status === 200) {
        if (res.data.result === 0 && res.data.data !== null) {
          yield put({ type: actions.ACCOUNT_LIST, list: res.data.data.data });
          yield put({ type: actions.ACCOUNT_TOTAL_LIST, total: res.data.data.total });
          yield put({ type: actions.ACCOUNT_INFO, total: res.data.data.totalValue });
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
      } else {
        yield put({
          type: errorActions.ERROR_REQUEST,
          error: res
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export function* accountInfoSaga() {
  yield takeEvery(actions.ACCOUNT_INFO_REQUEST, function*() {
    try {
      yield put({ type: actions.ACCOUNT_LOADING, loading: true });

      // Get request
      const token = yield select(getToken);
      const profile = yield select(accountProfile);
      const params = {
        userId: profile.userId,
        channel: profile.channel
      };
      // Set condition
      if (profile.isExist === 0) {
        params.userId = null;
      }
      const res = yield Info(params, token);

      // handle request
      if (res.status === 200 && res.data.result === 0 && res.data.data !== null) {
        yield put({ type: actions.ACCOUNT_INFO, total: res.data.data.totalCastInvest });
      } else {
        yield put({
          type: errorActions.ERROR_REQUEST,
          error: res
        });
      }

      yield put({ type: actions.ACCOUNT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(accountCheckLinkSaga),
    fork(accountLinkSaga),
    fork(accountInfoSaga),
    fork(accountBondsSaga)
  ]);
}
