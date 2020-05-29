import { cartActionTypes } from './cart.types';

const INITIAL_STATE = {
  shown: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.CART_SHOW_HIDE:
      return {
        ...state,
        shown: !state.shown,
      };
    default:
      return state;
  }
}

export default cartReducer;