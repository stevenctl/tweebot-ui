import React from 'react';

class Sidebar extends React.Component {

	constructor(){
		super();
	}
				
    render() {
		
        return (
			<div className="panel" style={{ marginTop: '20px'}}>
                <img className="pull-left" src={decodeURIComponent(this.props.userProfilePic)} style={{margin: '10px',borderRadius: '5px'}}/>
                <h4>{this.props.userFullName}</h4>
                <a href={'http://twitter.com/' + this.props.userScreenName}><h5>@{this.props.userScreenName}</h5></a>
			</div>
        );
    }
}

export default Sidebar;
