import actions from './actions';
import detail from 'db/detail';
import info from 'db/sellInfo';

const initialState = {
  list: [],
  detail: detail,
  info: info,
  total: 0,
  loading: false
};

const Trade = (state = initialState, action) => {
  switch (action.type) {
    case actions.TRADE_LIST:
      return { ...state, list: action.list.data, total: action.list.total };
    case actions.TRADE_DETAIL:
      return { ...state, detail: action.detail };
    case actions.TRADE_DATE:
      return { ...state, date: action.date };
    case actions.TRADE_INFO:
      return { ...state, info: action.info };
    case actions.TRADE_LOADING:
      return { ...state, loading: action.loading };
    case actions.TRADE_RESET:
      return initialState;
    default:
      return state;
  }
};

export default Trade;
