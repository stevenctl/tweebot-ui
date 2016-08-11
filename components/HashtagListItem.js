import React from 'react';

export default class HashtagListItem extends React.Component{

    constructor(){
        super();
        this.state={};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({
            showDelete: true
        })
    }

    onMouseLeave(){
        this.setState({
            showDelete: false
        })
    }

    render(){
        return (
            <a onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="list-group-item">
                {this.state.showDelete &&
                <span>
                    <a onClick={() => {this.props.onDeleteHandler(this.props.item.policyId)}} style={{color: 'red'}}>
                        <i className="fa fa-trash-o fa-lg"></i>
                    </a>
                    &nbsp;
                </span>}
                #{this.props.item.name}
                                        <span style={{minWidth: '30px'}} className="pull-right text-muted small">

                                              <div>{this.props.glyphicon} {this.props.item.number}</div>

                                        </span>
            </a>
        );
    }
}