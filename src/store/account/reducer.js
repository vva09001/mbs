import actions from './actions';

const initialState = {
  token: null,
  profile: {
    userId: 123456789,
    channel: 'VTP'
  },
  loading: false,
  error: {
    message: '',
    status: false
  }
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRORFILE:
      return { ...state, profile: { ...state.profile, ...action.profile } };
    case actions.ACCOUNT_LOADING:
      return { ...state, loading: action.loading };
    case actions.ACCOUNT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Account;
