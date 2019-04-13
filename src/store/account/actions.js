const actions = {
  CHECK_LINK_REQUEST: 'CHECK_LINK_REQUEST',
  ACCOUNT_LOADING: 'ACCOUNT_LOADING',
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  CLEAR_ACCOUNT_ERROR: 'CLEAR_ACCOUNT_ERROR',
  checkLink: params => ({
    type: actions.CHECK_LINK_REQUEST,
    params
  }),
  clearError: () => ({
    type: actions.CLEAR_ACCOUNT_ERROR
  })
};
export default actions;
