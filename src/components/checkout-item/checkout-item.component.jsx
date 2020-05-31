import React from 'react';
import {connect} from 'react-redux';

import { addToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({item, addItem, removeItem, clearItem}) => {
  const {imageUrl, name, quantity, price} = item;
  return(
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="remove-one" onClick={() => removeItem(item)}>&#10096;</div>
        <span>{quantity}</span>
        <div className="add-one" onClick={() => addItem(item)}>&#10097;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);