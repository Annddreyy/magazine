import { combineReducers, createStore, applyMiddleware } from 'redux';
import headerReducer from './headerReducer';
import productsReducer from './productsReducer';
import footerReducer from './footerReducer';
import reviewsReducer from './reviewsReducer';
import binReducer from './binReducer';
import { thunk as thunkMiddleware } from 'redux-thunk';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    auth: authReducer,
    bin: binReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
