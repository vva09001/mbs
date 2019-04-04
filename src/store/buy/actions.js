const actions = {
  BUY: 'BUY',
  BUY_GET: 'BUY_GET',
  BUY_CONTRACT: 'BUY_CONTRACT',
  BUY_GET_CONTRACT: 'BUY_GET_CONTRACT',
  BUY_FLOW: 'BUY_FLOW',
  BUY_FLOW_CASH: 'BUY_FLOW_CASH',
  BUY_FLOW_GET: 'BUY_FLOW_GET',
  BUY_INFO: 'BUY_INFO',
  BUY_INFO_GET: 'BUY_INFO_GET',
  BUY_BOOK: 'BUY_BOOK',
  SET_BUY: 'SET_BUY',
  BUY_UPDATE: 'BUY_UPDATE',
  BUY_APPROVE: 'BUY_APPROVE',
  BUY_LOADING: 'BUY_LOADING',
  BUY_ERROR: 'BUY_ERROR',
  getBuy: params => ({
    type: actions.BUY_GET,
    params
  }),
  getFlow: params => ({
    type: actions.BUY_FLOW_GET,
    params
  }),
  getInfo: params => ({
    type: actions.BUY_INFO_GET,
    params
  }),
  set: params => ({
    type: actions.SET_BUY,
    params
  }),
  update: () => ({
    type: actions.BUY_UPDATE
  }),
  getContract: () => ({
    type: actions.BUY_GET_CONTRACT
  }),
  approve: () => ({
    type: actions.BUY_APPROVE
  })
};
export default actions;
