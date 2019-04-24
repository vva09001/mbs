import actions from './actions';

const initialState = {
  list: [],
  detail: {},
  info: {},
  date: [],
  contract: {},
  book: {},
  loading: false,
  total: 0
};

const Sell = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELL_TOTAL:
      return { ...state, total: action.total };
    case actions.SELL_LIST:
      return { ...state, list: action.list };
    case actions.SELL_DETAIL:
      return { ...state, detail: action.detail };
    case actions.SELL_FLOW:
      return { ...state, flow: action.flow };
    case actions.SELL_INFO:
      return { ...state, info: action.info };
    case actions.SELL_DATE:
      return { ...state, date: action.date };
    case actions.SELL_BOOK:
      return { ...state, book: action.book };
    case actions.SELL_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default Sell;
