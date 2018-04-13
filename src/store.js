import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import PostReducer from './reducers/posts';

const initialStoreState = {
    posts: [],
};

const customMiddlewares = [thunk];

const reduxDevToolsMiddleware = window.devToolsExtension && window.devToolsExtension();

const store = createStore(
    PostReducer,
    initialStoreState,
    compose(
        applyMiddleware(...customMiddlewares),
        reduxDevToolsMiddleware
    ),
);

export default store;
