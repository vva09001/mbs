import actions from './actions';

const initialState = {
  list: [],
  flow: [],
  info: {},
  date: [],
  loading: false,
  error: ''
};

const Sell = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELL_FLOW:
      return { ...state, flow: action.flow };
    case actions.SELL_INFO:
      return { ...state, info: action.info };
    case actions.SELL_LOADING:
      return { ...state, loading: action.loading };
    case actions.SELL_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Sell;
