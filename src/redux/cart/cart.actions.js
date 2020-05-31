import { cartActionTypes } from './cart.types';

export const showOrHideCart = shown => ({
  type: cartActionTypes.CART_SHOW_HIDE,
});

export const addToCart = item => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
})