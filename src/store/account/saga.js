import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register } from '../../services/account';
import { toast } from 'react-toastify';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    try {
      const response = yield Register(data.data)
        .then(res => {
          return res;
        })
        .catch(e => e);
      if (response.status === 200) {
        toast.success('Register successfully !');
      } else {
        toast.error('Register error !');
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}


export default function* rootSaga() {
  yield all([fork(registerSaga)]);
}
