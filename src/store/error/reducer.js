import actions from './actions';
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
  transfer_done: {
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
    case actions.TRANSER_DONE:
      return { ...state, transfer_done: action.done };
    case actions.ERROR:
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
