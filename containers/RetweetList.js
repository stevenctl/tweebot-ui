import { connect } from 'react-redux';
import {addRetweetHashtag, getRetweetHashtags, removeRetweetHashtag} from '../actions/retweetPolicyActions';

import RetweetList from '../components/RetweetList';

const mapDispatchToProps = (dispatch) => {

    return {
        doAddRetweetHashtag : (hashtag) => {dispatch(addRetweetHashtag(hashtag))},
        doGetRetweetHashtags : () => {dispatch(getRetweetHashtags())},
        doRemoveRetweetHashtag : (policyId) => {dispatch(removeRetweetHashtag(policyId))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        retweetHashtags: state.retweetHashtags
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RetweetList);