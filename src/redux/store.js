import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [
  logger,
];

// takes a root reducer and applyMiddleware return value.
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;