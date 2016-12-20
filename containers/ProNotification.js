import { connect } from 'react-redux';
import {getSubscription} from '../actions/actions';

import ProNotification from '../components/ProNotification';

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

export default connect(mapStateToProps, mapDispatchToProps)(ProNotification);