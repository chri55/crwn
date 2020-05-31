import { cartActionTypes } from './cart.types';

export const showOrHideCart = shown => ({
  type: cartActionTypes.CART_SHOW_HIDE,
});

export const addToCart = item => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_FROM_CART,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});