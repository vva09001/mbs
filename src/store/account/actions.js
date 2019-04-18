const actions = {
  PRORFILE: 'PRORFILE',
  LINK_STEP: 'LINK_STEP',
  LINK_STEP_DATA: 'LINK_STEP_DATA',
  CHECK_LINK_REQUEST: 'CHECK_LINK_REQUEST',
  LINK_REQUEST: 'LINK_REQUEST',
  ACCOUNT_LIST: 'ACCOUNT_LIST',
  ACCOUNT_LIST_REQUEST: 'ACCOUNT_LIST_REQUEST',
  ACCOUNT_INFO: 'ACCOUNT_INFO',
  ACCOUNT_INFO_REQUEST: 'ACCOUNT_INFO_REQUEST',
  ACCOUNT_LOADING: 'ACCOUNT_LOADING',
  ACCOUNT_ERROR: 'ACCOUNT_ERROR',
  CLEAR_ACCOUNT_ERROR: 'CLEAR_ACCOUNT_ERROR',
  checkLink: params => ({
    type: actions.CHECK_LINK_REQUEST,
    params
  }),
  link: params => ({
    type: actions.LINK_REQUEST,
    params
  }),
  list: params => ({
    type: actions.ACCOUNT_LIST_REQUEST,
    params
  }),
  info: () => ({
    type: actions.ACCOUNT_INFO_REQUEST
  }),
  clearError: () => ({
    type: actions.CLEAR_ACCOUNT_ERROR
  })
};
export default actions;
