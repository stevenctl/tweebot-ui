import React from 'react';
import HashtagList from './HashtagList';

export default class LikeList extends React.Component{

    componentWillMount(){

    }

    render(){
        let heartIcon = <i className="glyphicon glyphicon-heart"/>;
        let heading = <div>{heartIcon} Like
                        <span className="pull-right">
                            <a onClick={this.props.doGetLikeHashtags}>
                                <i className="glyphicon glyphicon-refresh"/>
                            </a>
                        </span>
                    </div>;
        let itemArray = this.props.likeHashtags.map((item) => {
            return {
                name: item.hashtag,
                number: item.likes,
                policyId: item.policyId
            }
        });
        return(
           <HashtagList heading={heading} hashtags={itemArray} glyphicon={heartIcon} addHandler={this.props.doAddLikeHashtag} deleteHandler={this.props.doRemoveLikeHashtag}/>
        );

    }

}