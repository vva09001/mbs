import actions from './actions';

const initialState = {
  flow: [],
  info: {},
  loading: false,
  error: ''
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_FLOW:
      return { ...state, flow: action.flow };
    case actions.BUY_INFO:
      return { ...state, info: action.info };
    case actions.BUY_LOADING:
      return { ...state, loading: !state.loading };
    case actions.BUY_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Buy;
