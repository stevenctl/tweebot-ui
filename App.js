import React from 'react';
import Layout from './containers/Layout';
import Landing from './components/Landing';
import Tutorial1 from './components/tutorial/Tutorial1';
import Tutorial2 from './components/tutorial/Tutorial2';
import Tutorial3 from './components/tutorial/Tutorial3';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
	render() {
		
		
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={Layout}>
						<IndexRoute component={Landing} />
                        <Route path="tutorial1" component={Tutorial1}/>
                        <Route path="tutorial2" component={Tutorial2}/>
                        <Route path="tutorial3" component={Tutorial3}/>
					</Route>
				</Router>
			</div>
		);
	}
}

export default App;
