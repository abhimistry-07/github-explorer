import { FETCH_FOLLOWERS_FAILURE, FETCH_FOLLOWERS_REQUEST, FETCH_FOLLOWERS_SUCCESS, FETCH_FOLLOWER_REPOSITORIES_SUCCESS, FETCH_REPOSITORIES_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionTypes";


const initialState = {
    userData: [],
    isLoading: false,
    isError: null,
    repositories: [], // Add this field
    followers: [], // Add this field
    // followerRepositories: []
    followerRepositories: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                repositories: action.payload,
                isLoading: false,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                isError: null,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                userData: null,
                isLoading: false,
                isError: action.payload,
            };
        case FETCH_FOLLOWERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_FOLLOWERS_SUCCESS:
            return {
                ...state,
                followers: action.payload,
                isLoading: false,
                isError: null,
            };
        case FETCH_FOLLOWERS_FAILURE:
            return {
                ...state,
                followers: null,
                isLoading: false,
                isError: action.payload,
            };
        case FETCH_FOLLOWER_REPOSITORIES_SUCCESS:
            return {
                ...state,
                followerRepositories: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
