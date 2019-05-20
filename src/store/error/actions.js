const actions = {
  BUY_DONE: 'BUY_DONE',
  SELL_DONE: 'SELL_DONE',
  TRADE_DONE: 'TRADE_DONE',
  TRADE_EDIT_DONE: 'TRADE_EDIT_DONE',
  ERROR: 'ERROR',
  ERROR_REQUEST: 'ERROR_REQUEST',
  CLEAR_ERROR: 'CLEAR_ERROR',
  error: error => ({
    type: actions.ERROR_REQUEST,
    error
  }),
  clearError: () => ({
    type: actions.CLEAR_ERROR
  })
};
export default actions;
