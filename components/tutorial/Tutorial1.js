import React from 'react';
import cookie from 'react-cookie';
import axios from 'axios';
import {Link} from 'react-router';

					
class Tutorial1 extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {};
		console.log('tut1');
		
		
	}
	
	
	
	render(){
		
		
		return (
			<div className="panel" style={{marginTop: '20px'}}>
				 <div className="panel-block" style={{padding: '20px'}}>
							<h2>Auto-Like</h2>
							
							<Link to="tutorial1" style={{float: 'right'}}><button className="btn btn-default">Next</button></Link>
							<Link to="/"><p>Exit Tutorial</p></Link>
					</div>
			</div>
		);
	}
	
}

export default Tutorial1;