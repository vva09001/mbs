const actions = {
  COIN: 'COIN',
  COIN_LIST: 'COIN_LIST',
  COIN_DETAIL: 'COIN_DETAIL',
  COIN_GET: 'COIN_GET',
  COIN_ERROR: 'COIN_ERROR',
  list: () => ({
    type: actions.COIN_LIST
  }),
  detail: id => ({
    type: actions.COIN_GET,
    id
  })
};
export default actions;
