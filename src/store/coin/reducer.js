import actions from './actions';

const initialState = {
  list: [],
  detail: {},
  error: ''
};

const Coin = (state = initialState, action) => {
  switch (action.type) {
    case actions.COIN:
      return { ...state, list: action.list };
    case actions.COIN_DETAIL:
      return { ...state, detail: action.detail };
    case actions.COIN_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Coin;
