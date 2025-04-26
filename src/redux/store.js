import { combineReducers, createStore } from 'redux';
import headerReducer from './headerReducer';
import productsReducer from './productsReducer';
import footerReducer from './footerReducer';
import reviewsReducer from './reviewsReducer';
import binReducer from './binReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    bin: binReducer
});

const store = createStore(rootReducer);

export default store;
