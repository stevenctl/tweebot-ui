import React from 'react';
import HashtagList from './HashtagList';

export default class FollowList extends React.Component{

    componentWillMount(){

    }

    render(){
        let heartIcon = <i className="glyphicon glyphicon-heart"/>;
        let heading = <div>{heartIcon} Follow
                         <span className="pull-right">
                            <a onClick={this.props.doGetFollowHashtags}>
                                <i className="glyphicon glyphicon-refresh"/>
                            </a>
                         </span>
                        </div>;
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