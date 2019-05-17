import actions from './actions';
import error from 'utils/error';
const initialState = {
  buy_done: {
    status: false,
    message: ''
  },
  sell_done: {
    status: false,
    message: ''
  },
  trade_done: {
    status: false,
    message: ''
  },
  trade_edit_done: {
    status: false,
    message: ''
  },
  error: {
    message: '',
    message2: '',
    status: false
  }
};

const Error = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_DONE:
      return { ...state, buy_done: action.done };
    case actions.SELL_DONE:
      return { ...state, sell_done: action.done };
    case actions.TRADE_DONE:
      return { ...state, trade_done: action.done };
    case actions.TRADE_EDIT_DONE:
      return { ...state, trade_edit_done: action.done };
    case actions.ERROR:
      if (action.error.message === '') {
        action.error.message = error['-9999'];
      }
      return {
        ...state,
        error: {
          ...state.error,
          ...action.error
        }
      };
    default:
      return state;
  }
};

export default Error;
