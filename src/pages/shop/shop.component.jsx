import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import './shop.styles.scss'
import SHOP_DATA from './shop.data.js';


class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA,
		};
  }
  
  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...collectionProps}) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage;
