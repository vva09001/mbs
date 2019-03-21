import { combineReducers } from 'redux';

import Bonds from './bonds/reducer';
import Buy from './buy/reducer';
import Sell from './sell/reducer';

const reducers = combineReducers({
  Bonds,
  Buy,
  Sell
});

export default reducers;
