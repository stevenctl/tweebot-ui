import React from 'react';
import cookie from 'react-cookie';

class Header extends React.Component{

	constructor(){
		super();
	}

	componentWillMount(props){
		this.props.doGetUserInfo();
	}

	render(){
		return (
			<nav className="navbar navbar-inverse navbar-static-top">
			   <div className="container-fluid">
				  {/*Brand and toggle get grouped for better mobile display */}
				  <div className="navbar-header">
					 <a className="navbar-brand" href="/">tweebot</a>
					 {/*
					 <ul className="navbar-service dropdown">
						<a href="#" role="button">Menu</a>
						<ul className="dropdown-menu dropdown-menu-right">
						   <li><a href="#">Stuff</a></li>
						   <li><a href="#">Other Stuff</a></li>
						   <li><a href="#">Even More Stuff</a></li>
						</ul> 
					 </ul>
					 */}
				  </div>
				  {/*Support and sign out links*/}
				  <div className="collapse navbar-collapse">
					 <ul className="nav navbar-nav navbar-right navbar-account">
						<li className="dropdown">
						   <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
						   <i className="fa fa-user fa-fw"></i>  <i className="fa fa-caret-down"></i>
						   </a>
						   <ul className="dropdown-menu dropdown-user">
							  <li><a href="#"><i className="fa fa-user fa-fw"></i> {this.props.userFullName}</a></li>
							  <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a></li>
							  <li className="divider"></li>
							  <li onClick={this.props.doLogout.bind(this)}>
								<a href="#"><i className="fa fa-sign-out fa-fw"></i>Logout</a>
							  </li>
						   </ul>
						
						</li>
					 </ul>
				  </div>
			   </div>
			</nav>
		);
	}
}

export default Header;
