import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  something: 0,
};

const somethingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DO_SOMETHING:
      return updateObject(state, { something: state.something + action.number });
    default:
      break;
  }

  return state;
};

export default somethingReducer;
