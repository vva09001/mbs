import actions from './actions';
import moment from 'moment';

const initialState = {
  token: null,
  expiresAt: moment()
    .add(3, 's')
    .toDate()
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, token: action.auth.token };
    default:
      return state;
  }
};

export default Auth;
