import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import bots from '../reducers/bots';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const middlewareR= routerMiddleware(hashHistory)

export default function configureStore(initialState) {
    const store = createStore(
        bots.handleAction,
        initialState,
        compose(applyMiddleware(thunkMiddleware,middlewareR, createLogger())));

    return store;
}