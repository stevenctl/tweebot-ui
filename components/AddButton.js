import React from 'react';

export default class AddButton extends React.Component{

    constructor(){
        super();
        this.state = {};
    }

    handleChange (name, e) {
        var change = {};
        change[name] = e.target.value;
        this.setState(change);
    }

    render(){
        return (

            <div className="panel-footer">
                <div className="input-group">
                    <input type="text" className="form-control input-sm" placeholder="Type your hashtag here..."
                           value={this.state.hashtagInput}
                           onChange={this.handleChange.bind(this, 'hashtagInput')}/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary btn-sm"
                            onClick={
                                () => {
                                    this.props.onClickHandler(this.state.hashtagInput);
                                    this.setState({hashtagInput : ''});
                                }
                            }>Add</button>
                        </span>
                </div>
            </div>

        );
    }
    
}