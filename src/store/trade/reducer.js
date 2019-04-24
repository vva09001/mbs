import actions from './actions';

const initialState = {
  list: [],
  detail: {},
  info: {},
  loading: false
};

const Trade = (state = initialState, action) => {
  switch (action.type) {
    case actions.TRADE_LIST:
      return { ...state, list: action.list };
    case actions.TRADE_DETAIL:
      return { ...state, detail: action.detail };
    case actions.TRADE_DATE:
      return { ...state, date: action.date };
    case actions.TRADE_INFO:
      return { ...state, info: action.info };
    case actions.TRADE_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default Trade;
