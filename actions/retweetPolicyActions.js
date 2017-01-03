import RequestStatus from './RequestStatus';
import axios from 'axios';
import cookie from 'react-cookie';
import config from 'react-global-configuration';

export const ADD_RETWEET_HASHTAG_REQUEST = 'ADD_RETWEET_HASHTAG_REQUEST', ADD_RETWEET_HASHTAG_SUCCESS = 'ADD_RETWEET_HASHTAG_SUCCESS', ADD_RETWEET_HASHTAG_FAIL = 'ADD_RETWEET_HASHTAG_FAIL';
export const REMOVE_RETWEET_HASHTAG_REQUEST = 'REMOVE_RETWEET_HASHTAG_REQUEST', REMOVE_RETWEET_HASHTAG_SUCCESS = 'REMOVE_RETWEET_HASHTAG_SUCCESS', REMOVE_RETWEET_HASHTAG_FAIL = 'REMOVE_RETWEET_HASHTAG_FAIL';
export const GET_RETWEET_HASHTAGS_REQUEST = 'GET_RETWEET_HASHTAGS_REQUEST', GET_RETWEET_HASHTAGS_SUCCESS = 'GET_RETWEET_HASHTAGS_SUCCESS', GET_RETWEET_HASHTAGS_FAIL = 'GET_RETWEET_HASHTAGS_FAIL';

export function addRetweetHashtag(hashtag){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: ADD_RETWEET_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.post('http://' + config.get('API_HOST') + '/tweebot/policies/retweet?hashtag=' + hashtag,{},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: ADD_RETWEET_HASHTAG_SUCCESS,
                    status: status.success(),
                    userInfo: json.data
                });
                dispatch(getRetweetHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: ADD_RETWEET_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function removeRetweetHashtag(policyId){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: REMOVE_RETWEET_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.delete('http://' + config.get('API_HOST') + '/tweebot/policies/retweet',
            {
                params: {
                    policyId
                },
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: REMOVE_RETWEET_HASHTAG_SUCCESS,
                    status: status.success(),
                    returnData: json.data
                });
                dispatch(getRetweetHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: REMOVE_RETWEET_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function getRetweetHashtags(){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: GET_RETWEET_HASHTAGS_REQUEST,
            status: status.copy()
        });

        return axios.get('http://' + config.get('API_HOST') + '/tweebot/policies/retweet',
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'userId': cookie.load('userId').replace('str', '')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: GET_RETWEET_HASHTAGS_SUCCESS,
                    status: status.success(),
                    hashtags: json.data
                })
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: GET_RETWEET_HASHTAGS_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}