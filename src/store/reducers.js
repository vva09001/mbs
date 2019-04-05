import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Account from './account/reducer';
import Bonds from './bonds/reducer';
import Buy from './buy/reducer';
import Sell from './sell/reducer';

const reducers = combineReducers({
  Account,
  Bonds,
  Buy,
  Sell
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
