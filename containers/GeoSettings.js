import { connect } from 'react-redux';
import {getGeoPolicy,updateGeoPolicy,createGeoPolicy} from '../actions/actions';

import GeoSettings from '../components/GeoSettings';

const mapDispatchToProps = (dispatch) => {
	
    return {
        doGetGeoPolicy: () => {dispatch(getGeoPolicy())},
        doPutGeoPolicy: (zip, radius, active) => {dispatch(updateGeoPolicy(zip, radius, active))},
        doPostGeoPolicy: (zip, radius, active) => {dispatch(createGeoPolicy(zip, radius, active))}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
	    geoPolicy: state.geoPolicy,
        getGeoStatus: state.getGeoStatus,
        putGeoStatus: state.putGeoStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeoSettings);