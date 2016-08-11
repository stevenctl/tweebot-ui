import { connect } from 'react-redux';
import {getUserInfo} from '../actions/actions';

import Sidebar from '../components/Sidebar';

const mapDispatchToProps = (dispatch) => {
	
    return {

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		getUserInfoStatus: state.getUserInfoStatus,
		userScreenName: state.userScreenName,
		userFullName: state.userFullName,
		userId: state.userId,
        userProfilePic: state.userProfilePic
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);