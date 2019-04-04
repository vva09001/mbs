import actions from './actions';

const initialState = {
  loading: false,
  token: null,
  profile: {
    userId: 123456789,
    channel: 'VT'
  },
  error: '',
  auth: true
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, auth: action.auth };
    case actions.TOKEN:
      return { ...state, token: action.token };
    case actions.USER:
      return { ...state, profile: action.profile };
    case actions.USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Account;
