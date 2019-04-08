const actions = {
  AUTH: 'AUTH',
  AUTH_REQUEST: 'AUTH_REQUEST',
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  auth: data => ({
    type: actions.AUTH_REQUEST,
    data
  })
};
export default actions;
