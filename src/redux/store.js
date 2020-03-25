import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import logger from 'redux-logger';

const middleware = [thunk];
const initialState = {};

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(
    rootReducer,
    initialState,
    (applyMiddleware(...middleware))
);

export default store;