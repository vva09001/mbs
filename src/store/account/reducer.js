import actions from './actions';

const initialState = {
  loading: false,
  token: null,
  account: {},
  error: '',
  auth: false
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, auth: action.auth };
    case actions.TOKEN:
      return { ...state, token: action.token };
    case actions.USER:
      return { ...state, account: action.account };
    case actions.USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Account;
