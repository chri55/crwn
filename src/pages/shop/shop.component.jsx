import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';

import './shop.styles.scss'


const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Switch>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
      </Switch>
    </div>
  )
}

export default ShopPage;
