const actions = {
  SELL_TOTAL: 'SELL_TOTAL',
  SELL_LIST: 'SELL_LIST',
  SELL_LIST_GET: 'SELL_LIST_GET',
  SELL_INFO: 'SELL_INFO',
  SELL_INFO_GET: 'SELL_FLOW_GET',
  SELL_CONTRACT_REQUEST: 'SELL_CONTRACT_REQUEST',
  SELL_DATE: 'SELL_DATE',
  SELL_DATE_REQUEST: 'SELL_DATE_REQUEST',
  SELL_BOOK: 'SELL_BOOK',
  SELL_BOOK_REQUEST: 'SELL_BOOK_REQUEST',
  SELL_UPDATE_REQUEST: 'SELL_UPDATE_REQUEST',
  SELL_LOADING: 'SELL_LOADING',
  SELL_ERROR: 'SELL_ERROR',
  CLEAR_SELL_ERROR: 'CLEAR_SELL_ERROR',
  get: params => ({
    type: actions.SELL_LIST_GET,
    params
  }),
  getInfo: params => ({
    type: actions.SELL_INFO_GET,
    params
  }),
  getContract: params => ({
    type: actions.SELL_CONTRACT_REQUEST,
    params
  }),
  getDate: params => ({
    type: actions.SELL_DATE_REQUEST,
    params
  }),
  book: params => ({
    type: actions.SELL_BOOK_REQUEST,
    params
  }),
  update: () => ({
    type: actions.SELL_UPDATE_REQUEST
  }),
  clearError: () => ({
    type: actions.CLEAR_SELL_ERROR
  })
};
export default actions;
