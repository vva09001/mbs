const actions = {
  PRORFILE: 'PRORFILE',
  LINK_STEP: 'LINK_STEP',
  LINK_STEP_DATA: 'LINK_STEP_DATA',
  CHECK_LINK_REQUEST: 'CHECK_LINK_REQUEST',
  LINK_REQUEST: 'LINK_REQUEST',
  ACCOUNT_LIST: 'ACCOUNT_LIST',
  ACCOUNT_TOTAL_LIST: 'ACCOUNT_TOTAL_LIST',
  ACCOUNT_LIST_REQUEST: 'ACCOUNT_LIST_REQUEST',
  ACCOUNT_INFO: 'ACCOUNT_INFO',
  ACCOUNT_INFO_REQUEST: 'ACCOUNT_INFO_REQUEST',
  ACCOUNT_LOADING: 'ACCOUNT_LOADING',
  CHECK_ACCOUNT_CODE: 'CHECK_ACCOUNT_CODE',
  ACCOUNT_CODE_INFO: 'ACCOUNT_CODE_INFO',
  TRANSER_MONEY: 'TRANSER_MONEY',
  TRANSER_VERIFY_RESULT: 'TRANSER_VERIFY_RESULT',
  setAccount: profile => ({
    type: actions.PRORFILE,
    profile
  }),
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
  checkAccountCode: accountCode => ({
    type: actions.CHECK_ACCOUNT_CODE,
    accountCode
  }),
  transferMoney: (accountCode, money, des) => ({
    type: actions.TRANSER_MONEY,
    accountCode,
    money,
    des
  }),
  verifyResult: params => ({
    type: actions.TRANSER_VERIFY_RESULT,
    params
  })
};
export default actions;
