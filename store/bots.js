import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import bots from '../reducers/bots';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

const middlewareR= routerMiddleware(hashHistory)

export default function configureStore(initialState) {
    
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	
	const store = createStore(
        bots.handleAction,
        initialState,
        composeEnhancers(
				applyMiddleware(thunkMiddleware,middlewareR, createLogger())
			)
	);

    return store;
}