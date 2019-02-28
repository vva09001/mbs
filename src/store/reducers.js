import { combineReducers } from 'redux';

import User from './user/reducer';
import Coin from './coin/reducer';

const reducers = combineReducers({
  User,
  Coin
});

export default reducers;
