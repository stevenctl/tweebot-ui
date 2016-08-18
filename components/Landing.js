import React from 'react';
import cookie from 'react-cookie';
import axios from 'axios';
import {Link} from 'react-router';
import LikeList from '../containers/LikeList';
import RetweetList from '../containers/RetweetList';
import FollowList from '../containers/FollowList';

class Landing extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {};
		
		
	}
	
	
	
	render(){
		
		if(!cookie.load('hasSeenTutorial')){
			var expiration_date = new Date();
			expiration_date.setFullYear(expiration_date.getFullYear() + 1);
			cookie.save('hasSeenTutorial', true, {expires: expiration_date});
			return (
			<div className="panel" style={{marginTop: '20px'}}>
				 <div className="panel-block" style={{padding: '20px'}}>
						<center>
							<h2 >Welcome to tweebot</h2>
							<Link to="tutorial1"><button className="btn btn-default">Next</button></Link>
						</center>
					</div>
			</div>
			);
		}
		
		return (
			<div className="panel container" style={{marginTop: '20px', padding: '20px'}}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                        <LikeList />
                    </div>

                    <div className="col-md-4 col-md-offset-1">
                        <RetweetList />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                        <FollowList />
                    </div>
                </div>
			</div>
		);
		
		
	}
	
}

export default Landing;