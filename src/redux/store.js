import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middleware = [
  logger,
  
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// takes a root reducer and applyMiddleware return value.
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

export default {store, persistor};