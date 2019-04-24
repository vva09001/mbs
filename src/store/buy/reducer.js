import actions from './actions';
import contract from '../../db/getContractBuyDetail';
const initialState = {
  flow: {},
  flowCash: {},
  info: {},
  params: {
    volume: 0,
    sum: 0
  },
  contract: contract,
  loading: false,
  loading_flow: false,
  loading_buy: false,
  payment_link: ''
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_FLOW:
      return { ...state, flow: action.flow };
    case actions.BUY_PARAMS:
      return { ...state, params: action.params };
    case actions.BUY_FLOW_CASH:
      return { ...state, flowCash: action.flowCash };
    case actions.BUY_INFO:
      return { ...state, info: action.info };
    case actions.BUY_CONTRACT:
      return { ...state, contract: action.contract };
    case actions.BUY_PAYMENT_LINK:
      return { ...state, payment_link: action.link };
    case actions.BUY_LOADING:
      return { ...state, loading: action.loading };
    case actions.BUY_FLOW_LOADING:
      return { ...state, loading_flow: action.loading };
    case actions.BUY_INFO_LOADING:
      return { ...state, loading_buy: action.loading };
    default:
      return state;
  }
};

export default Buy;
