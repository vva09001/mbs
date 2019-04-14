const actions = {
  AUTH: 'AUTH',
  AUTH_REQUEST: 'AUTH_REQUEST',
  PAYMENT_GATEWAY: 'PAYMENT_GATEWAY',
  PAYMENT_GATEWAY_REQUEST: 'PAYMENT_GATEWAY_REQUEST',
  VERIFY_RESULT: 'VERIFY_RESULT',
  VERIFY_RESULT_REQUEST: 'VERIFY_RESULT_REQUEST',
  AUTH_ERROR: 'AUTH_ERROR',
  CLEAR_AUTH_ERROR: 'CLEAR_AUTH_ERROR',
  auth: params => ({
    type: actions.AUTH_REQUEST,
    params
  }),
  paymentGateway: params => ({
    type: actions.PAYMENT_GATEWAY_REQUEST,
    params
  }),
  verifyResult: params => ({
    type: actions.VERIFY_RESULT_REQUEST,
    params
  }),
  clearError: () => ({
    type: actions.CLEAR_AUTH_ERROR
  })
};
export default actions;
