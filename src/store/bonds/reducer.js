import actions from './actions';
import getList from '../../db/getList.json';
import getdetail from '../../db/getdetail.json';

const initialState = {
  list: getList,
  detail: getdetail,
  loading: false,
  error: ''
};

const Bonds = (state = initialState, action) => {
  switch (action.type) {
    case actions.BONDS:
      return { ...state, list: action.list };
    case actions.BONDS_DETAIL:
      return { ...state, detail: action.detail };
    case actions.BONDS_LOADING:
      return { ...state, loading: !state.loading };
    case actions.BONDS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Bonds;
