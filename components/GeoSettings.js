import React from 'react';
import AddButton from './AddButton';
import HashtagListItem from './HashtagListItem';

export default class GeoSettings extends React.Component{

    constructor(){
        super();
        this.state={};
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.geoPolicy){

            this.setState({
                zipCode: nextProps.geoPolicy.zipCode,
                radius: nextProps.geoPolicy.radius,
                geoEnabled: nextProps.geoPolicy.active
            });
        }
    }

    handleChange (name, e) {
        console.log(JSON.stringify(e.target.value));

        if(name === 'zipCode'){
            if(e.target.value)
                if(e.target.value.length > 5 || e.target.value.includes("-"))return;
        }else if(name === 'radius'){
            if(e.target.value)
                if(e.target.value.length > 2 || e.target.value.includes("-"))return;
        }

        var change = {};
        change[name] = e.target.value;
        if(name == 'geoEnabled')change[name] = e.target.checked;
        this.setState(change);
    }

    render(){
       

        return(
            <div className="panel panel-default" >
                <div className="panel-heading">
                    <i className="glyphicon glyphicon-map-marker"/> Location
                </div>
                <div className="panel-body " style={{minHeight: '160px'}}>
                    <div className="form-group">
                        <input disabled={!this.state.geoEnabled} onChange={this.handleChange.bind(this, 'zipCode')} value={this.state.zipCode} type="number" placeholder="Zip Code" className="form-control" style={{marginBottom: '10px'}}/>
                        <input disabled={!this.state.geoEnabled} onChange={this.handleChange.bind(this, 'radius')} value={this.state.radius} type="number" placeholder="Radius (mi)" className="form-control" style={{marginBottom: '10px'}}/>

                        <label>Enable Local Mode</label> <input onChange={this.handleChange.bind(this, 'geoEnabled')} checked={this.state.geoEnabled} type="checkbox"/>
                    </div>
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary btn-sm"
                            onClick={
                                () => {
                                   if(this.props.geoPolicy){
                                        this.props.doPutGeoPolicy(this.state.zipCode, this.state.radius, this.state.geoEnabled);
                                   }else{
                                        this.props.doPostGeoPolicy(this.state.zipCode, this.state.radius, this.state.geoEnabled);
                                   }
                                }
                            }
                    >
                        Save
                    </button>
                </div>
            </div>
        );

    }



}