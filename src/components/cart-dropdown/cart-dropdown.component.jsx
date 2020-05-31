import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => (
          <CartItem item={item} />
        ))
      }
    </div>
    <Link to='/checkout'>
      <Button> GO TO CHECKOUT </Button>
    </Link>
  </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
