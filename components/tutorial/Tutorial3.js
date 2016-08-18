import React from 'react';
import cookie from 'react-cookie';
import axios from 'axios';
import {Link} from 'react-router';
import FollowList from '../../containers/FollowList';
					
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
							<h2>Auto-Follow</h2>
                     <div className="container">

                                <div className="row">
                                    <div className="col-md-4 col-md-offset-2">
                                        <p style={{fontSize: '14pt'}}>This component allows you to list the hashtags your account will follow. Periodically during the day,
                                        tweebot will follow people on your behalf based on if they made tweets using your selected hashtags. </p>
                                    </div>
                                    <div className="col-md-4 col-md-offset-1">
                                        <FollowList/>
                                    </div>
                                </div>
							</div>
							<Link to="/" style={{float: 'right'}}><button className="btn btn-default">Finish</button></Link>
					</div>
			</div>
		);
	}
	
}

export default Tutorial1;