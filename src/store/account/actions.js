const actions = {
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  auth: data => ({
    type: actions.AUTH_REQUEST,
    data
  })
};
export default actions;
