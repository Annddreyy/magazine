import { combineReducers, createStore } from 'redux';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
    header: headerReducer
});

const store = createStore(rootReducer);

export default store;
