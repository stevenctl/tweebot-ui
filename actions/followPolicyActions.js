import RequestStatus from './RequestStatus';
import axios from 'axios';
import cookie from 'react-cookie';
import config from 'react-global-configuration';

export const ADD_FOLLOW_HASHTAG_REQUEST = 'ADD_FOLLOW_HASHTAG_REQUEST', ADD_FOLLOW_HASHTAG_SUCCESS = 'ADD_FOLLOW_HASHTAG_SUCCESS', ADD_FOLLOW_HASHTAG_FAIL = 'ADD_FOLLOW_HASHTAG_FAIL';
export const REMOVE_FOLLOW_HASHTAG_REQUEST = 'REMOVE_FOLLOW_HASHTAG_REQUEST', REMOVE_FOLLOW_HASHTAG_SUCCESS = 'REMOVE_FOLLOW_HASHTAG_SUCCESS', REMOVE_FOLLOW_HASHTAG_FAIL = 'REMOVE_FOLLOW_HASHTAG_FAIL';
export const GET_FOLLOW_HASHTAGS_REQUEST = 'GET_FOLLOW_HASHTAGS_REQUEST', GET_FOLLOW_HASHTAGS_SUCCESS = 'GET_FOLLOW_HASHTAGS_SUCCESS', GET_FOLLOW_HASHTAGS_FAIL = 'GET_FOLLOW_HASHTAGS_FAIL';

export function addFollowHashtag(hashtag){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: ADD_FOLLOW_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.post('http://' + config.get('API_HOST') + '/tweebot/policies/follow?hashtag=' + hashtag,{},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId':  cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: ADD_FOLLOW_HASHTAG_SUCCESS,
                    status: status.success(),
                    userInfo: json.data
                });
                dispatch(getFollowHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: ADD_FOLLOW_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function removeFollowHashtag(policyId){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: REMOVE_FOLLOW_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.delete('http://' + config.get('API_HOST') + '/tweebot/policies/follow',
            {
                params: {
                    policyId
                },
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId':  cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: REMOVE_FOLLOW_HASHTAG_SUCCESS,
                    status: status.success(),
                    returnData: json.data
                });
                dispatch(getFollowHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: REMOVE_FOLLOW_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function getFollowHashtags(){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: GET_FOLLOW_HASHTAGS_REQUEST,
            status: status.copy()
        });

        return axios.get('http://' + config.get('API_HOST') + '/tweebot/policies/follow',
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId':  cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: GET_FOLLOW_HASHTAGS_SUCCESS,
                    status: status.success(),
                    hashtags: json.data
                })
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: GET_FOLLOW_HASHTAGS_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}