import { cartActionTypes } from './cart.types';

export const showOrHideCart = shown => ({
  type: cartActionTypes.CART_SHOW_HIDE,
})