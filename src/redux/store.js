import { combineReducers, createStore } from 'redux';
import headerReducer from './headerReducer';
import productsReducer from './productsReducer';
import footerReducer from './footerReducer';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    products: productsReducer,
    reviews: reviewsReducer
});

const store = createStore(rootReducer);

export default store;
