import React from 'react';
import cookie from 'react-cookie';
import axios from 'axios';
import {Link} from 'react-router';
import RetweetList from '../../containers/RetweetList';
					
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
							<h2>Auto-Retweet</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-md-offset-1">
                                        <RetweetList/>
                                    </div>
                                    <div className="col-md-4 col-md-offset-2">
                                        <p style={{fontSize: '14pt'}}>This component allows you to list the hashtags your account will retweet. Periodically during the day,
                                        tweebot will retweet posts on your behalf based on this criteria.</p>
                                    </div>
                                </div>
							</div>
							<Link to="tutorial3" style={{float: 'right'}}><button className="btn btn-default">Next</button></Link>
							<Link to="/"><p>Exit Tutorial</p></Link>
					</div>
			</div>
		);
	}
	
}

export default Tutorial1;