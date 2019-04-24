const actions = {
  BUY_DONE: 'BUY_DONE',
  SELL_DONE: 'SELL_DONE',
  TRADE_DONE: 'TRADE_DONE',
  ERROR: 'ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  clearError: () => ({
    type: actions.CLEAR_ERROR
  })
};
export default actions;
