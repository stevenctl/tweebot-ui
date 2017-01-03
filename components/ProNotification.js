import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import config from 'react-global-configuration';
import cookie from 'react-cookie';
import axios from 'axios';
import Checkout from '../containers/Checkout';

export default class ProNotification extends React.Component{

  constructor(){
	  super();
	  
  }
  
  componentDidMount(){
	  this.props.doGetSubscription();
  }

  render() {
    return (
		<div>{
		!this.props.isPro ?
		<div className="row">
			<div className="col-md-10 col-md-offset-1 alert alert-info">
				Upgrade to tweebot PRO for just $5 to remove ad-retweets <span className="pull-right"><Checkout/></span>
			</div> 
		</div>
		: <div></div>
		}</div>
    )
  }

}