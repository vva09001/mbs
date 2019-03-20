import actions from './actions';

const initialState = {
  list: [],
  detail: {},
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
