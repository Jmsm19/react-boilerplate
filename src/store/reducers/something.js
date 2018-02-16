import * as actionTypes from '../actions';

const initialState = {
  something: 0,
};

const somethingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DO_SOMETHING:
      return {
        ...state,
        something: state.something + action.data.number,
      };
    default:
      break;
  }

  return state;
};

export default somethingReducer;
