import { cartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils'; 

const INITIAL_STATE = {
  shown: false,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.CART_SHOW_HIDE:
      return {
        ...state,
        shown: !state.shown,
      };
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [], // to change
      }
    default:
      return state;
  }
}

export default cartReducer;