import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import productsReducer from './products/productsReducer';
import reviewsReducer from './reviews/reviewsReducer';
import binReducer from './bin/binReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    auth: authReducer,
    bin: binReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
