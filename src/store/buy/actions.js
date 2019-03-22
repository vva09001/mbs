const actions = {
  BUY: 'BUY',
  BUY_GET: 'BUY_GET',
  BUY_FLOW: 'BUY_FLOW',
  BUY_FLOW_GET: 'BUY_FLOW_GET',
  BUY_INFO: 'BUY_INFO',
  BUY_INFO_GET: 'BUY_FLOW_GET',
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
  })
};
export default actions;
