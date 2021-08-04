import { createStore, combineReducers } from 'redux';
import { WebsiteInterface } from './reducer';


const reducers = combineReducers({
    WebsiteInterface
});

export const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());