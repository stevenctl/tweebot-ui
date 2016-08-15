import cookie from 'react-cookie';
import axios from 'axios';
import RequestStatus from './RequestStatus';
import config from 'react-global-configuration';


export const USER_INFO_REQUEST = 'USER_INFO_REQUEST', USER_INFO_SUCCESS = 'USER_INFO_SUCCESS', USER_INFO_FAIL = 'USER_INFO_FAIL';
export const LOGOUT = 'LOGOUT';

export function logout(){
    return {
        type: LOGOUT
    };
}

export function getUserInfo() {
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: USER_INFO_REQUEST,
            status: status.copy()
        });
		
		if(cookie.load('userId') && cookie.load('userProfilePic') && cookie.load('userFullName') && cookie.load('userScreenName')){
			return dispatch({
                    type: USER_INFO_SUCCESS,
                    status: status.success(),
					userInfo: {
								id_str: cookie.load('userId'),
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
                })
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