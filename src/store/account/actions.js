const actions = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  TOKEN: 'TOKEN',
  ACCOUNT: 'ACCOUNT',
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  register: data => ({
    type: actions.REGISTER_REQUEST,
    data
  }),
  login: data => ({
    type: actions.LOGIN_REQUEST,
    data
  })
};
export default actions;
