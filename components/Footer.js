import React from 'react';

class Footer extends React.Component {
	render(){
		return (
			<div className="text-center" style={
							{
								color: '#000',
								fontSize: '15px', 
								lineHeight: '80px'
							}
						}
			>
				<footer className="footer">
					<div className="container">
						<ul className="list-inline">
							<li>©2016 Sugarware. All Rights Reserved.</li>&nbsp;|&nbsp;
							<li><a href="#" target="_new">Privacy Policy</a></li>&nbsp;|&nbsp;
							<li><a href="#" target="_new">About tBot</a></li>&nbsp;|&nbsp;
							<li><a href="#" target="_new">Terms of Use</a></li>&nbsp;|&nbsp;
							<li><a href="#">Release Notes</a></li>&nbsp;|&nbsp;
							<li><a href="#">Feedback</a></li>&nbsp;|&nbsp;
							<li><a href="#" target="_new">Contact Us</a></li>&nbsp;|&nbsp;
						</ul>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
