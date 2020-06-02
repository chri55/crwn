import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection }  from '../../redux/shop/shop.selectors';

import './category.styles.scss';

const CategoryPage = ({ match, category }) => {
  console.log(category);
  return (
    <div className="category">
      <h2>{`${category.title}`}</h2>
      <div className="items-container">
        {
          category.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

//                              props of component being wrapped in connect
const mapStateToProps = (state, ownProps) => ({
  category: selectCollection(ownProps.match.params.categoryId)(state),
})

export default connect(mapStateToProps)(CategoryPage);


