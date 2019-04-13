import actions from './actions';
import bondsActions from '../bonds/actions';
import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import Error from '../../utils/error';
import { List } from '../../services/trade';
import history from '../../utils/history';
import { accountProfile, sellDate, sellBook, getToken } from '../selectors';

export function* clearTradeErrorSaga() {
  yield takeEvery(actions.CLEAR_TRADE_ERROR, function*() {
    yield put({ type: actions.TRADE_ERROR, error: { message: '', status: false } });
  });
}

export default function* rootSaga() {
  yield all([
    fork(clearTradeErrorSaga)
  ]);
}
