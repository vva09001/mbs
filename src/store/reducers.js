import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moment from 'moment';
// import expireReducer from 'redux-persist-expire';
import createExpirationTransform from 'redux-persist-transform-expire';

import Account from 'store/account/reducer';
import Auth from 'store/auth/reducer';
import Bonds from 'store/bonds/reducer';
import Buy from 'store/buy/reducer';
import Sell from 'store/sell/reducer';
import Trade from 'store/trade/reducer';
import Error from 'store/error/reducer';

const reducers = combineReducers({
  Account,
  Auth,
  Bonds,
  Buy,
  Sell,
  Trade,
  Error
});
const expireTransform = createExpirationTransform({
  expireKey: 'expiresAt',
  defaultState: {
    token: null,
    error: {
      message: '',
      status: false
    },
    expiresAt: moment()
      .add(10, 'm')
      .toDate()
  }
});
const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireTransform],
  blacklist: ['Error']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
