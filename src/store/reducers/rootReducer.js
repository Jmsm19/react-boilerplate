import { combineReducers } from 'redux';
import somethingReducer from './something';

const rootReducer = combineReducers({
  smt: somethingReducer,
});

export default rootReducer;
