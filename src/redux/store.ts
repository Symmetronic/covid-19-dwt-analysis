import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { root, RootState } from './reducers';

/* Middlewares to apply. */
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/**
 * The global data storage, i.e. the app's model.
 */
export const initialStore: Store<RootState> = createStore(
  root,
  applyMiddleware(...middlewares)
);
