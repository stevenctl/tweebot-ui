import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/bots';
import config from 'react-global-configuration';
import cookie from 'react-cookie';

//for IE/opera/safari
if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

config.set({
    API_HOST: "localhost:8080"
});


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('app'));
