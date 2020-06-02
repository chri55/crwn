import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({id, ...collectionProps}) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
