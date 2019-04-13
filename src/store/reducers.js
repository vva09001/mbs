import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Account from 'store/account/reducer';
import Auth from 'store/auth/reducer';
import Bonds from 'store/bonds/reducer';
import Buy from 'store/buy/reducer';
import Sell from 'store/sell/reducer';
import Trade from 'store/trade/reducer';

const reducers = combineReducers({
  Account,
  Auth,
  Bonds,
  Buy,
  Sell,
  Trade
});
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
