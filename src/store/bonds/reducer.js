import actions from './actions';
import detail from 'db/detail';
const initialState = {
  list: [],
  total: 0,
  detail: detail,
  loading: false
};

const Bonds = (state = initialState, action) => {
  switch (action.type) {
    case actions.BONDS:
      return { ...state, list: action.list };
    case actions.BONDS_DETAIL:
      return { ...state, detail: action.detail };
    case actions.BONDS_TOTAL:
      return { ...state, total: action.total };
    case actions.BONDS_LOADING:
      return { ...state, loading: action.loading };
    case actions.BONDS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default Bonds;
