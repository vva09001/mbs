const actions = {
  AUTH: 'AUTH',
  AUTH_REQUEST: 'AUTH_REQUEST',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  TOKEN: 'TOKEN',
  ACCOUNT: 'ACCOUNT',
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  auth: data => ({
    type: actions.AUTH_REQUEST,
    data
  })
};
export default actions;
