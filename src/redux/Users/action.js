import axios from "axios";
import {
    FETCH_FOLLOWERS_SUCCESS,
    FETCH_FOLLOWER_REPOSITORIES_SUCCESS,
    FETCH_REPOSITORIES_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
} from "./actionTypes";

export const fetchUser = (username) => (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });

    // Initialize an object to store all the fetched data
    const userData = {};

    axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => {

            // console.log(res);
            // Store user data
            userData.user = res.data;

            // console.log(userData);

            // Fetch repositories for the user
            return axios.get(res.data.repos_url);
        })
        .then((res) => {
            // Store repositories data
            userData.repositories = res.data;

            // Fetch followers for the user
            return axios.get(userData.user.followers_url);
        })
        .then((res) => {
            // Store followers data
            userData.followers = res.data;

            // Dispatch all the data at once
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: userData.user,
            });

            // Dispatch repositories and followers separately
            dispatch({
                type: FETCH_REPOSITORIES_SUCCESS,
                payload: userData.repositories,
            });

            dispatch({
                type: FETCH_FOLLOWERS_SUCCESS,
                payload: userData.followers,
            });
        })
        .catch((err) => {
            dispatch({
                type: FETCH_USER_FAILURE,
                payload: err,
            });
        });
};


// New action to fetch follower's repositories
export const fetchFollowerRepositories = (followerLogin) => (dispatch) => {
    // Fetch the follower's repositories
    axios.get(`https://api.github.com/users/${followerLogin}/repos`)
        .then((res) => {
            // Dispatch action to store the follower's repositories
            dispatch({
                type: FETCH_FOLLOWER_REPOSITORIES_SUCCESS,
                payload: {
                    followerLogin,
                    repositories: res.data,
                },
            });
        })
        .catch((err) => {
            // Handle errors here
            console.error("Error fetching follower's repositories:", err);
        });
};