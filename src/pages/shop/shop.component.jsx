import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';

import './shop.styles.scss'


const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
        <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  )
}

export default ShopPage;
