import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { register, login } from '../../services/user';
import { toast } from 'react-toastify';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    try {
      const response = yield register(data.data)
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

export function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    try {
      // get request
      const response = yield login(data.data);
      //handle request
      if (response.status === 200) {
        yield put({ type: actions.TOKEN, token: response.data.token });
        toast.success('Login successfully !');
      } else {
        toast.error('Login error !');
      }
    } catch (error) {
      yield put({ type: actions.USER_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(registerSaga), fork(loginSaga)]);
}
