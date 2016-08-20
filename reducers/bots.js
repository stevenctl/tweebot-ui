import {USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAIL,
        GET_GEO_REQUEST, GET_GEO_SUCCESS, GET_GEO_FAIL,
        PUT_GEO_REQUEST, PUT_GEO_SUCCESS, PUT_GEO_FAIL,
         POST_GEO_REQUEST, POST_GEO_SUCCESS, POST_GEO_FAIL,
        LOGOUT} from '../actions/actions';

import {ADD_LIKE_HASHTAG_REQUEST, ADD_LIKE_HASHTAG_SUCCESS, ADD_LIKE_HASHTAG_FAIL,
    REMOVE_LIKE_HASHTAG_REQUEST, REMOVE_LIKE_HASHTAG_SUCCESS, REMOVE_LIKE_HASHTAG_FAIL,
    GET_LIKE_HASHTAGS_REQUEST, GET_LIKE_HASHTAGS_SUCCESS, GET_LIKE_HASHTAGS_FAIL} from '../actions/likePolicyActions';

import {ADD_RETWEET_HASHTAG_REQUEST, ADD_RETWEET_HASHTAG_SUCCESS, ADD_RETWEET_HASHTAG_FAIL,
    REMOVE_RETWEET_HASHTAG_REQUEST, REMOVE_RETWEET_HASHTAG_SUCCESS, REMOVE_RETWEET_HASHTAG_FAIL,
    GET_RETWEET_HASHTAGS_REQUEST, GET_RETWEET_HASHTAGS_SUCCESS, GET_RETWEET_HASHTAGS_FAIL} from '../actions/retweetPolicyActions';

import {ADD_FOLLOW_HASHTAG_REQUEST, ADD_FOLLOW_HASHTAG_SUCCESS, ADD_FOLLOW_HASHTAG_FAIL,
    REMOVE_FOLLOW_HASHTAG_REQUEST, REMOVE_FOLLOW_HASHTAG_SUCCESS, REMOVE_FOLLOW_HASHTAG_FAIL,
    GET_FOLLOW_HASHTAGS_REQUEST, GET_FOLLOW_HASHTAGS_SUCCESS, GET_FOLLOW_HASHTAGS_FAIL} from '../actions/followPolicyActions';

import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

const initialState = {};

//mock data
const mockHashtags = ['abc','def','tbt','perfect','funny','trump'];

function handleAction(state, action){
	if(typeof state === 'undefined') {
		state = initialState;
		state.loggedIn = (cookie.load('oauth_token') ? true : false);
        state.likeHashtags = [];
        state.retweetHashtags = [];
        state.followHashtags = [];

    }
		console.log("REDUCDER RECIEVED ACTION: " + action.type);

    console.log(typeof action.type)
    if(typeof action.type == 'string')
    if(action.type.includes("LIKE_HASHTAG")){
        return likeHashtag(action, state);
    }else if(action.type.includes("RETWEET_HASHTAG")){
        return retweetHashtag(action, state);
    }else if(action.type.includes("FOLLOW_HASHTAG")){
        return followHashtag(action, state);
    }else if(action.type.includes("USER_INFO")){
        return userInfo(action, state);
    }else if(action.type.includes("_GEO_")){
        return geoPolicy(action, state);
    }

	switch(action.type){
        case LOGOUT:
            Object.keys(cookie.select(/^user.*/i)).forEach(name => cookie.remove(name, { path: '/' }));
            Object.keys(cookie.select(/^oauth.*/i)).forEach(name => cookie.remove(name, { path: '/' }));

            browserHistory.push('/');
            return Object.assign({}, state, {
               loggedIn: false
            });
		default:

			return state;
	}
}


function userInfo(action, state){
    switch(action.type){
        case USER_INFO_SUCCESS:
            cookie.save('userId', "str" + action.userInfo.id_str , { path: '/' });
            cookie.save('userFullName', action.userInfo.name, { path: '/' });
            cookie.save('userScreenName', action.userInfo.screen_name, { path: '/' });
            cookie.save('userProfilePic', action.userInfo.profile_image_url, {path: '/'});
            return Object.assign({}, state, {
                getUserInfoStatus: action.status,
                userId: action.userInfo.id,
                userFullName: action.userInfo.name,
                userScreenName: action.userInfo.screen_name,
                userProfilePic: action.userInfo.profile_image_url,
                loggedIn: true
            });
        case USER_INFO_REQUEST:
            return Object.assign({}, state, {
                getUserInfoStatus: action.status
            });
        case USER_INFO_FAIL:
            return Object.assign({}, state, {
                getUserInfoStatus: action.status
            });
    }
    return state;
}

function likeHashtag(action, state){
    switch(action.type){
        //Add
        case ADD_LIKE_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                addLikeHashtagStatus: action.status
            });
        case ADD_LIKE_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                addLikeHashtagStatus: action.status
            });
        case ADD_LIKE_HASHTAG_FAIL:
            return Object.assign({}, state, {
                addLikeHashtagStatus: action.status
            });
        //Remove
        case REMOVE_LIKE_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                removeLikeHashtagStatus: action.status
            });
        case REMOVE_LIKE_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                removeLikeHashtagStatus: action.status
            });
        case REMOVE_LIKE_HASHTAG_FAIL:
            return Object.assign({}, state, {
                removeLikeHashtagStatus: action.status
            });
        //Get
        case GET_LIKE_HASHTAGS_REQUEST:
            return Object.assign({}, state, {
                getLikeHashtagStatus: action.status
            });
        case GET_LIKE_HASHTAGS_SUCCESS:
            return Object.assign({}, state, {
                getLikeHashtagStatus: action.status,
                likeHashtags: action.hashtags
            });
        case GET_LIKE_HASHTAGS_FAIL:
            return Object.assign({}, state, {
                getLikeHashtagStatus: action.status
            });

    }
    return state;
}

function retweetHashtag(action, state){
    switch(action.type){
        //Add
        case ADD_RETWEET_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                addRetweetHashtagStatus: action.status
            });
        case ADD_RETWEET_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                addRetweetHashtagStatus: action.status
            });
        case ADD_RETWEET_HASHTAG_FAIL:
            return Object.assign({}, state, {
                addRetweetHashtagStatus: action.status
            });
        //Remove
        case REMOVE_RETWEET_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                removeRetweetHashtagStatus: action.status
            });
        case REMOVE_RETWEET_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                removeRetweetHashtagStatus: action.status
            });
        case REMOVE_RETWEET_HASHTAG_FAIL:
            return Object.assign({}, state, {
                removeRetweetHashtagStatus: action.status
            });
        //Get
        case GET_RETWEET_HASHTAGS_REQUEST:
            return Object.assign({}, state, {
                getRetweetHashtagStatus: action.status
            });
        case GET_RETWEET_HASHTAGS_SUCCESS:
            return Object.assign({}, state, {
                getRetweetHashtagStatus: action.status,
                retweetHashtags: action.hashtags
            });
        case GET_RETWEET_HASHTAGS_FAIL:
            return Object.assign({}, state, {
                getRetweetHashtagStatus: action.status
            });

    }
    return state;
}

function followHashtag(action, state){
    switch(action.type){
        //Add
        case ADD_FOLLOW_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                addFollowHashtagStatus: action.status
            });
        case ADD_FOLLOW_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                addFollowHashtagStatus: action.status
            });
        case ADD_FOLLOW_HASHTAG_FAIL:
            return Object.assign({}, state, {
                addFollowHashtagStatus: action.status
            });
        //Remove
        case REMOVE_FOLLOW_HASHTAG_REQUEST:
            return Object.assign({}, state, {
                removeFollowHashtagStatus: action.status
            });
        case REMOVE_FOLLOW_HASHTAG_SUCCESS:
            return Object.assign({}, state, {
                removeFollowHashtagStatus: action.status
            });
        case REMOVE_FOLLOW_HASHTAG_FAIL:
            return Object.assign({}, state, {
                removeFollowHashtagStatus: action.status
            });
        //Get
        case GET_FOLLOW_HASHTAGS_REQUEST:
            return Object.assign({}, state, {
                getFollowHashtagStatus: action.status
            });
        case GET_FOLLOW_HASHTAGS_SUCCESS:
            return Object.assign({}, state, {
                getFollowHashtagStatus: action.status,
                followHashtags: action.hashtags
            });
        case GET_FOLLOW_HASHTAGS_FAIL:
            return Object.assign({}, state, {
                getFollowHashtagStatus: action.status
            });

    }
    return state;
}

function geoPolicy(action, state) {
    switch(action.type){
        case GET_GEO_REQUEST:
            return Object.assign({}, state, {
                getGeoStatus: action.status
            });
        case GET_GEO_SUCCESS:
            return Object.assign({}, state, {
                getGeoStatus: action.status,
                geoPolicy: action.geoPolicy
            });
        case GET_GEO_FAIL:
            return Object.assign({}, state, {
                getGeoStatus: action.status
            });

        case PUT_GEO_REQUEST:
            return Object.assign({}, state, {
                putGeoStatus: action.status
            });
        case PUT_GEO_SUCCESS:
            return Object.assign({}, state, {
                putGeoStatus: action.status
            });
        case PUT_GEO_FAIL:
            return Object.assign({}, state, {
                putGeoStatus: action.status
            });

        case POST_GEO_REQUEST:
            return Object.assign({}, state, {
                postGeoStatus: action.status
            });
        case POST_GEO_SUCCESS:
            return Object.assign({}, state, {
                postGeoStatus: action.status
            });
        case POST_GEO_FAIL:
            return Object.assign({}, state, {
                postGeoStatus: action.status
            });

    }
}

module.exports = {handleAction};