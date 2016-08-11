import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';
import Sidebar from '../containers/Sidebar';


class Layout extends React.Component {

	constructor(){
		super();
	}
				
    render() {
		
	let body = (
			<div>
				<div className="col-md-2">
					<div>
						<Sidebar/>
					</div>
				</div>
				<div className="col-md-10">
                    {this.props.children}
				</div>
			</div>
			);
				
	let login = (
				<div className="panel col-md-2 col-md-offset-5" style={{marginTop: '20px', padding: '20px'}}>
					<center>
						<h1>Sign In</h1>
						<br/>
						<a href="http://localhost:8080/tweebot/connect/twitter"><img src="/login.png"/></a>
					</center>
				</div>
		);
		
        return (
			<div>
				<Header/>
					<div className="container-fluid">
						<div className="row">
							{this.props.loggedIn ? body : login}
						</div>
					</div>
				<Footer/>
			</div>
        );
    }
}

export default Layout;
