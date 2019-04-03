const actions = {
  BUY: 'BUY',
  BUY_GET: 'BUY_GET',
  BUY_FLOW: 'BUY_FLOW',
  BUY_FLOW_GET: 'BUY_FLOW_GET',
  BUY_INFO: 'BUY_INFO',
  BUY_INFO_GET: 'BUY_INFO_GET',
  BUY_BOOK: 'BUY_BOOK',
  SET_BUY: 'SET_BUY',
  BUY_ORDER: 'BUY_ORDER',
  BUY_CONFIRM: 'BUY_CONFIRM',
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
  order: params => ({
    type: actions.BUY_ORDER,
    params
  }),
  confirm: params => ({
    type: actions.BUY_CONFIRM,
    params
  })
};
export default actions;
