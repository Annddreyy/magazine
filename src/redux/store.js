import { combineReducers, createStore } from 'redux';
import headerReducer from './headerReducer';
import productsReducer from './productsReducer';
import footerReducer from './footerReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    products: productsReducer
});

const store = createStore(rootReducer);

export default store;
