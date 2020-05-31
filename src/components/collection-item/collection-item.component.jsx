import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button.component';
import { addToCart } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//                             name of prop action should be its key in mapDispatchToProps
const CollectionItem = ({item, addItem}) => {
  const {imageUrl, name, price} = item;
  return (
    <div className="collection-item">
      <div 
        className="image"
        style = {{
          backgroundImage: `url(${imageUrl})`
        }}
        >

      </div>
      <div className="collection-footer">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">${price}</span>
      </div>

      <Button invertColors onClick={() => addItem(item)}>
        ADD TO CART
      </Button>

    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addToCart(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);