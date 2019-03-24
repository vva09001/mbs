import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register } from '../../services/account';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    try {
      const response = yield Register(data.data)
        .then(res => {
          return res;
        })
        .catch(e => e);
      if (response.status === 200) {
      } else {
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}


export default function* rootSaga() {
  yield all([fork(registerSaga)]);
}
