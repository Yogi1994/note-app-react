/**
 * @fileoverview Setting up store, reducers and middleware
 */

import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers/index';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default createStoreWithMiddleware(reducers);
