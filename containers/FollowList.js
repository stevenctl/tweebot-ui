import { connect } from 'react-redux';
import {addFollowHashtag, getFollowHashtags, removeFollowHashtag} from '../actions/followPolicyActions';

import FollowList from '../components/FollowList';

const mapDispatchToProps = (dispatch) => {

    return {
        doAddFollowHashtag : (hashtag) => {dispatch(addFollowHashtag(hashtag))},
        doGetFollowHashtags : () => {dispatch(getFollowHashtags())},
        doRemoveFollowHashtag : (policyId) => {dispatch(removeFollowHashtag(policyId))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        followHashtags: state.followHashtags
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowList);