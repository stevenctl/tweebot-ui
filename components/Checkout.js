import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import config from 'react-global-configuration';
import cookie from 'react-cookie';
import axios from 'axios';

export default class Checkout extends React.Component{

  onToken(token){
	alert(JSON.stringify(token));
	
	 axios.post('http://' + config.get('API_HOST') + '/tweebot/payments/create',{id: token.id, email: token.email},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId':  cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                this.props.doGetSubscription();
            });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
		label = "Upgrade to PRO"
		amount={500}
		panelLabel="{amount}"
        token={this.onToken}
        stripeKey="pk_test_YALQKn70Waxn3fzlTQC90JrG"
      />
    )
  }

}