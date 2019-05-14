const actions = {
  BONDS: 'BONDS',
  BONDS_LIST: 'BONDS_LIST',
  BONDS_DETAIL: 'BONDS_DETAIL',
  BONDS_GET: 'BONDS_GET',
  BONDS_RESET: 'BONDS_RESET',
  BONDS_LOADING: 'BONDS_LOADING',
  BONDS_TOTAL: 'BONDS_TOTAL',
  list: params => ({
    type: actions.BONDS_LIST,
    params
  }),
  detail: params => ({
    type: actions.BONDS_GET,
    params
  })
};
export default actions;
