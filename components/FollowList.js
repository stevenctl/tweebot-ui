import React from 'react';
import HashtagList from './HashtagList';

export default class FollowList extends React.Component{

    componentWillMount(){
        this.props.doGetFollowHashtags();
    }

    render(){
        let heartIcon = <i className="glyphicon glyphicon-heart"/>;
        let heading = <div>{heartIcon} Follow</div>;
        let itemArray = this.props.followHashtags.map((item) => {
            return {
                name: item.hashtag,
                number: item.follows,
                policyId: item.policyId
            }
        });
        return(
            <HashtagList heading={heading} hashtags={itemArray} glyphicon={heartIcon} addHandler={this.props.doAddFollowHashtag} deleteHandler={this.props.doRemoveFollowHashtag}/>
        );

    }

}