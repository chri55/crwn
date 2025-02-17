import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartShown } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';



const Header = ({ currentUser, shown }) => (
  <div className='header'>
    <Link className='logo-container' to='/' >
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        // If user is signed in, let this button sign them out
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        // Otherwise, take them to the sign in page.
        <Link className='option' to='/signin'>SIGN IN</Link>
      )}
      
      <CartIcon />
      

    </div>
    {
      shown ? (<CartDropdown />) : null
    }
  </div>
);

//                                 automatically passes top level state in
const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  shown: selectCartShown, 
});

export default connect(mapStateToProps)(Header);