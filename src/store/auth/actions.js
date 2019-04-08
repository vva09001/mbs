const actions = {
  AUTH: 'AUTH',
  AUTH_REQUEST: 'AUTH_REQUEST',
  PAYMENT_GATEWAY: 'PAYMENT_GATEWAY',
  PAYMENT_GATEWAY_REQUEST: 'PAYMENT_GATEWAY_REQUEST',
  VERIFY_RESULT: 'VERIFY_RESULT',
  VERIFY_RESULT_REQUEST: 'VERIFY_RESULT_REQUEST',
  AUTH_ERROR: 'AUTH_ERROR',
  auth: data => ({
    type: actions.AUTH_REQUEST,
    data
  }),
  paymentGateway: data => ({
    type: actions.PAYMENT_GATEWAY_REQUEST,
    data
  }),
  verifyResult: data => ({
    type: actions.VERIFY_RESULT_REQUEST,
    data
  })
};
export default actions;
