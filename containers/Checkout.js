import { connect } from 'react-redux';
import {getSubscription} from '../actions/actions';

import Checkout from '../components/Checkout';

const mapDispatchToProps = (dispatch) => {
	
    return {
		doGetSubscription: () => {dispatch(getSubscription())}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		isPro: state.subscription > 0
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);