import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import productsReducer from './products/productsReducer';
import reviewsReducer from './reviews/reviewsReducer';
import binReducer from './bin/binReducer';
import authReducer from './auth/authReducer';
import appReducer from './app/appReducer';
import { reducer as formReducer } from 'redux-form';
import favorityReducer from './favority/favorityReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    favority: favorityReducer,
    reviews: reviewsReducer,
    auth: authReducer,
    bin: binReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
