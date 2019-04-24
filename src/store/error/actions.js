const actions = {
  DONE: 'DONE',
  ERROR: 'ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  clearError: () => ({
    type: actions.CLEAR_ERROR
  })
};
export default actions;
