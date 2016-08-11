import React from 'react';
import AddButton from './AddButton';
import HashtagListItem from './HashtagListItem';

export default class HashtagList extends React.Component{



    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.heading}
                </div>
                <div className="panel-body list-group">

                        {this.props.hashtags.map((item, i) => {
                                return <HashtagListItem item={item} glyphicon={this.props.glyphicon} onDeleteHandler={this.props.deleteHandler} key={i}/>;
                            }
                        )}

                </div>
                <AddButton onClickHandler={this.props.addHandler}/>
            </div>
        );

    }



}