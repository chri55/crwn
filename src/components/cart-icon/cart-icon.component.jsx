import React from 'react';
import { connect } from 'react-redux';

import { showOrHideCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ showOrHideCart }) => (
    <div className="cart-icon" onClick={showOrHideCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
  showOrHideCart: () => dispatch(showOrHideCart()),
})

export default connect(null, mapDispatchToProps)(CartIcon);



