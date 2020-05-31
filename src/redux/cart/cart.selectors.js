import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// createSeelctor creates a memoized selector.
export const selectCartItems = createSelector(
  // number of selectors in the array is number of 
  // args passed to combiner function
  [selectCart],
  (cart) => cart.cartItems 
);

export const selectCartItemsCount = createSelector(
  // Uses the selector defined above as we typically 
  // create selectors in order of specificity
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, newItem) => total + newItem.quantity,
    0
  )
);

export const selectCartShown = createSelector(
  [selectCart],
  (cart) => cart.shown 
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, newItem) => total + (newItem.quantity * newItem.price),
    0
  )
);