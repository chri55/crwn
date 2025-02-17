import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.length
      ? cartItems.map(item => 
        <CheckoutItem key={item.id} item={item}/>
      )
      : <span className='empty-cart'>Your cart is empty!</span>
    }
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="warning">
      <span>
        Please use the following test credit card for payment:
        <br />
        4242-4242-4242-4242 - Exp: 01/21 - CVV: 123
        </span>
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = (state) => createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);