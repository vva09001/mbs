import actions from './actions';

const initialState = {
  flow: {
    "nonInvest": [
      {
        "content":"coupon",
        "payCouponDate":"10/10/2019",
        "cashNonInvest": 100,
      }
      ],
      "invest": [
      {
        "content":"coupon",
        "cashNonInvest": 100,
        "payCouponDate":"10/10/2020",
        "lastPayCouponDate":"",
        "reinvestmentRate": 200,
        "cashInvest": 100
      }
    ]
  },
  info: {
    "contractCode":"10",
    "bondCode":"TEST2",
    "customerName":"",
    "customerId":"",
    "customerIdDate":"",
    "customerIdPlace":"",
    "maturityDate":"",
    "roomBalance": 10,
    "couponPayment": 10,
    "buyDate":"",
    "termRate": 8,
    "reinvestmentRate": 0,
    "buyVol": 10,
    "buyVolMin": 20,
    "buyPrice": 30,
    "buyFee": 40,
    "buyValue": 50,
    "numInvestDate": 60,
    "sumCashNoninvest": 70,
    "sumCashInvest": 80,
    "termNoninvest": 90,
    "termInvest": 100,
    "status":""
  },
  loading: false,
  error: ''
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_FLOW:
      return { ...state, flow: action.flow };
    case actions.BUY_INFO:
      return { ...state, info: action.info };
    case actions.BUY_LOADING:
      return { ...state, loading: !state.loading };
    case actions.BUY_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default Buy;
