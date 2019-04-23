import actions from './actions';

const initialState = {
  list: [],
  info: {},
  date: [],
  contract: {},
  book: {},
  loading: false,
  done: {
    message: '',
    status: false
  },
  total: 0,
  error: {
    message: '',
    status: false
  }
};

const Sell = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELL_TOTAL:
      return { ...state, total: action.total };
    case actions.SELL_LIST:
      return { ...state, list: action.list };
    case actions.SELL_FLOW:
      return { ...state, flow: action.flow };
    case actions.SELL_INFO:
      return { ...state, info: action.info };
    case actions.SELL_DATE:
      return { ...state, date: action.date };
    case actions.SELL_BOOK:
      return { ...state, book: action.book };
    case actions.SELL_DONE:
      return { ...state, done: action.done };
    case actions.SELL_LOADING:
      return { ...state, loading: action.loading };
    case actions.SELL_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Sell;
