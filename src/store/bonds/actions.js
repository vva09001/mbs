const actions = {
  BONDS: 'BONDS',
  BONDS_LIST: 'BONDS_LIST',
  BONDS_DETAIL: 'BONDS_DETAIL',
  BONDS_GET: 'BONDS_GET',
  BONDS_ERROR: 'BONDS_ERROR',
  list: () => ({
    type: actions.BONDS_LIST
  }),
  detail: id => ({
    type: actions.BONDS_GET,
    id
  })
};
export default actions;
