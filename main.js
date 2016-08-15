import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/bots';
import config from 'react-global-configuration';

config.set({
    API_HOST: "localhost:8080"
});


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('app'))