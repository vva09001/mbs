const actions = {
  TRADE_LIST: 'TRADE_LIST',
  TRADE_LIST_REQUEST: 'TRADE_LIST_REQUEST',
  TRADE_DETAIL: 'TRADE_DETAIL',
  TRADE_DETAIL_REQUEST: 'TRADE_DETAIL_REQUEST',
  TRADE_DATE: 'TRADE_DATE',
  TRADE_DATE_REQUEST: 'TRADE_DATE_REQUEST',
  TRADE_INFO: 'TRADE_INFO',
  TRADE_INFO_REQUEST: 'TRADE_INFO_REQUEST',
  TRADE_CHANGE_REQUEST: 'TRADE_CHANGE_REQUEST',
  TRADE_DELETE_REQUEST: 'TRADE_DELETE_REQUEST',
  TRADE_RESET: 'TRADE_RESET',
  TRADE_LOADING: 'TRADE_LOADING',
  list: params => ({
    type: actions.TRADE_LIST_REQUEST,
    params
  }),
  detail: params => ({
    type: actions.TRADE_DETAIL_REQUEST,
    params
  }),
  getDate: params => ({
    type: actions.TRADE_DATE_REQUEST,
    params
  }),
  getInfo: params => ({
    type: actions.TRADE_INFO_REQUEST,
    params
  }),
  change: params => ({
    type: actions.TRADE_CHANGE_REQUEST,
    params
  }),
  delete: () => ({
    type: actions.TRADE_DELETE_REQUEST
  })
};
export default actions;
