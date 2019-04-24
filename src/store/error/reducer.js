import actions from './actions';
const initialState = {
  done: {
    status: false,
    message: ''
  },
  error: {
    message: '',
    status: false
  }
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case actions.DONE:
      return { ...state, done: action.done };
    case actions.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Buy;
