import { combineReducers } from 'redux';

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

export default reducers;
