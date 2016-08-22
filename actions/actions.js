import cookie from 'react-cookie';
import axios from 'axios';
import RequestStatus from './RequestStatus';
import config from 'react-global-configuration';
import {getFollowHashtags} from './followPolicyActions';
import {getRetweetHashtags} from './retweetPolicyActions';
import {getLikeHashtags} from './likePolicyActions';


export const USER_INFO_REQUEST = 'USER_INFO_REQUEST', USER_INFO_SUCCESS = 'USER_INFO_SUCCESS', USER_INFO_FAIL = 'USER_INFO_FAIL';
export const GET_GEO_REQUEST = 'GET_GEO_REQUEST', GET_GEO_SUCCESS = 'GET_GEO_SUCCESS', GET_GEO_FAIL = 'GET_GEO_FAIL';
export const PUT_GEO_REQUEST = 'PUT_GEO_REQUEST', PUT_GEO_SUCCESS = 'PUT_GEO_SUCCESS', PUT_GEO_FAIL = 'PUT_GEO_FAIL';
export const POST_GEO_REQUEST = 'POST_GEO_REQUEST', POST_GEO_SUCCESS = 'POST_GEO_SUCCESS', POST_GEO_FAIL = 'POST_GEO_FAIL';

export const LOGOUT = 'LOGOUT';

export function logout(){
    return {
        type: LOGOUT
    };
}

export function getUserInfo() {
    let status = new RequestStatus();


    //if the userId cookie is in bad form, get rid of it
    if(cookie.load('userId')) {
        if (!(typeof cookie.load('userId') == 'string')) {
            Object.keys('userId', {path: '/'});
        }
    }


    return dispatch => {
        dispatch({
            type: USER_INFO_REQUEST,
            status: status.copy()
        });
		
		if(cookie.load('userId') && cookie.load('userProfilePic') && cookie.load('userFullName') && cookie.load('userScreenName')){
            console.log("already have cookie");
            dispatch(getLikeHashtags());
            dispatch(getFollowHashtags());
            dispatch(getRetweetHashtags());

			return dispatch({
                    type: USER_INFO_SUCCESS,
                    status: status.success(),
					userInfo: {
								id_str: cookie.load('userId').replace('str', ''),
								name: cookie.load('userFullName'),
								screen_name: cookie.load('userScreenName'),
                                profile_image_url: cookie.load('userProfilePic')
                                }
					});
		}
		
        return axios.get('http://' + config.get('API_HOST') + '/tweebot/connect/twitter/userInfo',
			{
				headers: {
					'oauth_token' : cookie.load('oauth_token'),
					'oauth_token_secret' : cookie.load('oauth_token_secret')
				}
			})
            .then(json => {    
                console.log(JSON.stringify(json));
                dispatch({
                    type: USER_INFO_SUCCESS,
                    status: status.success(),
					userInfo: json.data
                });

                dispatch(getLikeHashtags());
                dispatch(getFollowHashtags());
                dispatch(getRetweetHashtags());
                dispatch(getGeoPolicy());

            })
            .catch(e => {
                let errMsg = "Failed to get user info";
                console.error(errMsg);
                dispatch({
                    type: USER_INFO_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function getGeoPolicy(){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: GET_GEO_REQUEST,
            status: status.copy()
        });

        return axios.get('http://' + config.get('API_HOST') + '/tweebot/policies/geo',
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: GET_GEO_SUCCESS,
                    status: status.success(),
                    geoPolicy: json.data
                })
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: GET_GEO_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}


export function updateGeoPolicy(zip, radius, active){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: PUT_GEO_REQUEST,
            status: status.copy()
        });

        return axios.put('http://' + config.get('API_HOST') + '/tweebot/policies/geo?zip=' + zip + '&radius=' + radius + '&active=' + active,{},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: PUT_GEO_SUCCESS,
                    status: status.success(),
                    geoPolicy: json.data
                });
                dispatch(getGeoPolicy());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: PUT_GEO_FAIL,
                    status: status.error(errMsg)
                });
                dispatch(getGeoPolicy());
            })
    }
}

export function createGeoPolicy(zip, radius, active){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: POST_GEO_REQUEST,
            status: status.copy()
        });

        return axios.post('http://' + config.get('API_HOST') + '/tweebot/policies/geo?zip=' + zip + '&radius=' + radius + '&active=' + active,{},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: POST_GEO_SUCCESS,
                    status: status.success(),
                    geoPolicy: json.data
                });
                dispatch(getGeoPolicy());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: POST_GEO_FAIL,
                    status: status.error(errMsg)
                });
                dispatch(getGeoPolicy());
            })
    }
}