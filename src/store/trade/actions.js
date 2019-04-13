const actions = {
  TRADE_LIST: 'TRADE_LIST',
  TRADE_LIST_REQUEST: 'TRADE_LIST_REQUEST',
  TRADE_DETAIL: 'TRADE_DETAIL',
  TRADE_DETAIL_REQUEST: 'TRADE_DETAIL_REQUEST',
  TRADE_DATE: 'TRADE_DATE',
  TRADE_DATE_REQUEST: 'TRADE_DATE_REQUEST',
  TRADE_CHANGE_REQUEST: 'TRADE_CHANGE_REQUEST',
  TRADE_DELETE_REQUEST: 'TRADE_DELETE_REQUEST',
  TRADE_LOADING: 'TRADE_LOADING',
  TRADE_ERROR: 'TRADE_ERROR',
  CLEAR_TRADE_ERROR: 'CLEAR_TRADE_ERROR',
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
  change: params => ({
    type: actions.TRADE_CHANGE_REQUEST,
    params
  }),
  delete: () => ({
    type: actions.TRADE_DELETE_REQUEST
  }),
  clearError: () => ({
    type: actions.CLEAR_TRADE_ERROR
  })
};
export default actions;
