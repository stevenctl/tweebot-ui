import { connect } from 'react-redux';
import {addLikeHashtag, getLikeHashtags, removeLikeHashtag} from '../actions/likePolicyActions';

import LikeList from '../components/LikeList';

const mapDispatchToProps = (dispatch) => {
	
    return {
        doAddLikeHashtag : (hashtag) => {dispatch(addLikeHashtag(hashtag))},
        doGetLikeHashtags : () => {dispatch(getLikeHashtags())},
        doRemoveLikeHashtag : (policyId) => {dispatch(removeLikeHashtag(policyId))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        likeHashtags: state.likeHashtags
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeList);