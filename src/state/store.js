import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import appReducer from './appReducer';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(appReducer, applyMiddleware(...middleware));

export default store