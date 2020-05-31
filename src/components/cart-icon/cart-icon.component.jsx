import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import { showOrHideCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ showOrHideCart, itemCount }) => (
    <div className="cart-icon" onClick={showOrHideCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = (state) => createStructuredSelector({
  itemCount: selectCartItemsCount,
});
 
const mapDispatchToProps = dispatch => ({
  showOrHideCart: () => dispatch(showOrHideCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);



