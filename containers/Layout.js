import { connect } from 'react-redux';
import {getUserInfo} from '../actions/actions';

import Layout from '../components/Layout';

const mapDispatchToProps = (dispatch) => {
    return {
        doGetUserInfo: () => {dispatch(getUserInfo)}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		getUserInfoStatus: state.getUserInfoStatus,
		loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);