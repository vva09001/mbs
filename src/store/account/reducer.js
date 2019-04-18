import actions from './actions';

const initialState = {
  token: null,
  profile: {
    userId: null,
    channel: 'VT',
    isExist: 0
  },
  step: 1,
  stepData: {},
  list: [],
  total: 0,
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
    case actions.LINK_STEP:
      return { ...state, step: action.step };
    case actions.LINK_STEP_DATA:
      return { ...state, stepData: action.data };
    case actions.ACCOUNT_LIST:
      return { ...state, list: action.list };
    case actions.ACCOUNT_INFO:
      return { ...state, total: action.total };
    case actions.ACCOUNT_LOADING:
      return { ...state, loading: action.loading };
    case actions.ACCOUNT_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Account;
