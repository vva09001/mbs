import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Authentication } from '../../services/auth';

export default function* rootSaga() {
  yield all([]);
}
