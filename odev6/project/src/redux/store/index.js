import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import posts from '@redux/reducers/posts';

export default createStore(combineReducers({
    posts
}), applyMiddleware(thunk));