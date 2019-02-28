import actions from './actions';

const initialState = {
  loading: false,
  token: null,
  user: {},
  error: ''
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOKEN:
      return { ...state, token: action.token };
    case actions.USER:
      return { ...state, user: action.user };
    case actions.USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default User;
