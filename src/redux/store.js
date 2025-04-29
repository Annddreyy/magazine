import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import productsReducer from './products/productsReducer';
import reviewsReducer from './reviews/reviewsReducer';
import binReducer from './bin/binReducer';
import authReducer from './auth/authReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    auth: authReducer,
    bin: binReducer,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
