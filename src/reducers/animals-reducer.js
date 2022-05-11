import * as c from './../actions/ActionTypes.js';

let initialState = {
  isLoading: false,
  animals: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_ANIMALS:
      return Object.assign({}, state, {
        isLoading: true
      });
      case c.GET_ANIMALS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        animals: action.animals
      });
      case c.GET_ANIMALS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};