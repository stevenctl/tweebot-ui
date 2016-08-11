import RequestStatus from './RequestStatus';
import axios from 'axios';
import cookie from 'react-cookie';

export const ADD_LIKE_HASHTAG_REQUEST = 'ADD_LIKE_HASHTAG_REQUEST', ADD_LIKE_HASHTAG_SUCCESS = 'ADD_LIKE_HASHTAG_SUCCESS', ADD_LIKE_HASHTAG_FAIL = 'ADD_LIKE_HASHTAG_FAIL';
export const REMOVE_LIKE_HASHTAG_REQUEST = 'REMOVE_LIKE_HASHTAG_REQUEST', REMOVE_LIKE_HASHTAG_SUCCESS = 'REMOVE_LIKE_HASHTAG_SUCCESS', REMOVE_LIKE_HASHTAG_FAIL = 'REMOVE_LIKE_HASHTAG_FAIL';
export const GET_LIKE_HASHTAGS_REQUEST = 'GET_LIKE_HASHTAGS_REQUEST', GET_LIKE_HASHTAGS_SUCCESS = 'GET_LIKE_HASHTAGS_SUCCESS', GET_LIKE_HASHTAGS_FAIL = 'GET_LIKE_HASHTAGS_FAIL';

export function addLikeHashtag(hashtag){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: ADD_LIKE_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.post('http://localhost:8080/tweebot/policies/like?hashtag=' + hashtag,{},
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'oauth_token_secret' : cookie.load('oauth_token_secret'),
                    'userId': cookie.load('userId')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: ADD_LIKE_HASHTAG_SUCCESS,
                    status: status.success(),
                    userInfo: json.data
                });
                dispatch(getLikeHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: ADD_LIKE_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function removeLikeHashtag(policyId){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: REMOVE_LIKE_HASHTAG_REQUEST,
            status: status.copy()
        });

        return axios.delete('http://localhost:8080/tweebot/policies/like',
            {
                params: {
                    policyId
                },
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'oauth_token_secret' : cookie.load('oauth_token_secret'),
                    'userId': cookie.load('userId')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: REMOVE_LIKE_HASHTAG_SUCCESS,
                    status: status.success(),
                    returnData: json.data
                });
                dispatch(getLikeHashtags());
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: REMOVE_LIKE_HASHTAG_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}

export function getLikeHashtags(){
    let status = new RequestStatus();

    return dispatch => {
        dispatch({
            type: GET_LIKE_HASHTAGS_REQUEST,
            status: status.copy()
        });

        return axios.get('http://localhost:8080/tweebot/policies/like',
            {
                headers: {
                    'oauth_token' : cookie.load('oauth_token'),
                    'oauth_token_secret' : cookie.load('oauth_token_secret'),
                    'userId': cookie.load('userId')
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                dispatch({
                    type: GET_LIKE_HASHTAGS_SUCCESS,
                    status: status.success(),
                    hashtags: json.data
                })
            })
            .catch(e => {
                let errMsg = e;
                console.error(errMsg);
                dispatch({
                    type: GET_LIKE_HASHTAGS_FAIL,
                    status: status.error(errMsg)
                })
            })
    }
}