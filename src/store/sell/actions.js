const actions = {
  SELL_TOTAL: 'SELL_TOTAL',
  SELL_LIST: 'SELL_LIST',
  SELL_LIST_GET: 'SELL_LIST_GET',
  SELL_DETAIL: 'SELL_DETAIL',
  SELL_DETAIL_REQUEST: 'SELL_DETAIL_REQUEST',
  SELL_INFO: 'SELL_INFO',
  SELL_INFO_GET: 'SELL_FLOW_GET',
  SELL_CONTRACT_REQUEST: 'SELL_CONTRACT_REQUEST',
  SELL_DATE: 'SELL_DATE',
  SELL_DATE_REQUEST: 'SELL_DATE_REQUEST',
  SELL_BOOK: 'SELL_BOOK',
  SELL_BOOK_REQUEST: 'SELL_BOOK_REQUEST',
  SELL_UPDATE_REQUEST: 'SELL_UPDATE_REQUEST',
  SELL_RESET: 'SELL_RESET',
  SELL_LOADING: 'SELL_LOADING',
  get: params => ({
    type: actions.SELL_LIST_GET,
    params
  }),
  getDetail: params => ({
    type: actions.SELL_DETAIL_REQUEST,
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
  })
};
export default actions;
