import { combineReducers, createStore } from 'redux';
import headerReducer from './headerReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    products: productsReducer
});

const store = createStore(rootReducer);

export default store;
