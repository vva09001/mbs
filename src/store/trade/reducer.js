import actions from './actions';

const initialState = {
  list: [],
  loading: false,
  error: {
    message: '',
    status: false
  }
};

const Sell = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELL_LIST:
      return { ...state, list: action.list };
    case actions.SELL_LOADING:
      return { ...state, loading: action.loading };
    case actions.TRADE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Sell;
