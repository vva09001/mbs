export const accountProfile = state => state.Account.profile;
export const getToken = state => state.Auth.token;

export const buyGetBook = state => state.Buy.book;
export const buyGetContract = state => state.Buy.contract;
export const buyVolMin = state => state.Buy.info.buyVolMin;
export const buyVolMax = state => state.Bonds.detail.roomBalance;

export const sellDate = state => state.Sell.date;
export const sellBook = state => state.Sell.book;

export const tradeCode = state => state.Trade.detail.sellContractCode;
