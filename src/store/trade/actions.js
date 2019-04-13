const actions = {
  TRADE_LIST: 'TRADE_LIST',
  TRADE_LIST_REQUEST: 'TRADE_LIST_REQUEST',
  TRADE_LOADING: 'SELL_LOADING',
  TRADE_ERROR: 'SELL_ERROR',
  CLEAR_TRADE_ERROR: 'CLEAR_SELL_ERROR',
  get: params => ({
    type: actions.TRADE_LIST_REQUEST,
    params
  }),
  clearError: () => ({
    type: actions.CLEAR_SELL_ERROR
  })
};
export default actions;
