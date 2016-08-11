import { connect } from 'react-redux';
import {getUserInfo, logout} from '../actions/actions';

import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => {
	
    return {
        doGetUserInfo: () => {dispatch(getUserInfo())},
        doLogout: () => {dispatch(logout())}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		getUserInfoStatus: state.getUserInfoStatus,
		userScreenName: state.userScreenName,
		userFullName: state.userFullName,
		userId: state.userId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);