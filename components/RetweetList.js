import React from 'react';
import HashtagList from './HashtagList';

export default class RetweetList extends React.Component{

    componentWillMount(){

    }

    render(){
        let heartIcon = <i className="glyphicon glyphicon-retweet"/>;
        let heading = <div>{heartIcon} Retweet
                        <span className="pull-right">
                            <a onClick={this.props.doGetRetweetHashtags}>
                                <i className="glyphicon glyphicon-refresh"/>
                            </a>
                        </span>
        </div>;
        let itemArray = this.props.retweetHashtags.map((item) => {
            return {
                name: item.hashtag,
                number: item.retweets,
                policyId: item.policyId
            }
        });
        return(
            <HashtagList heading={heading} hashtags={itemArray} glyphicon={heartIcon} addHandler={this.props.doAddRetweetHashtag} deleteHandler={this.props.doRemoveRetweetHashtag}/>
        );

    }

}