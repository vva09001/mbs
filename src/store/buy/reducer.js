import actions from './actions';
import contract from '../../db/getContractBuyDetail';
const initialState = {
  flow: {},
  flowCash: {},
  info: {},
  book: {},
  contract: contract,
  loading: false,
  loading_flow: false,
  payment_link: '',
  error: {
    message: '',
    status: false
  }
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_FLOW:
      return { ...state, flow: action.flow };
    case actions.BUY_FLOW_CASH:
      return { ...state, flowCash: action.flowCash };
    case actions.BUY_INFO:
      return { ...state, info: action.info };
    case actions.BUY_BOOK:
      return { ...state, book: action.book };
    case actions.BUY_CONTRACT:
      return { ...state, contract: action.contract };
    case actions.BUY_PAYMENT_LINK:
      return { ...state, payment_link: action.link };
    case actions.BUY_LOADING:
      return { ...state, loading: action.loading };
    case actions.BUY_FLOW_LOADING:
      return { ...state, loading_flow: action.loading };
    case actions.BUY_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Buy;
