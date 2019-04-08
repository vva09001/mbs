import actions from './actions';

const initialState = {
  loading: false,
  token: null,
  profile: {
    userId: 123456789,
    channel: 'VT'
  },
  error: ''
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, token: action.auth.token };
    case actions.USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Account;
