import { faAcquisitionsIncorporated } from "@fortawesome/free-brands-svg-icons"

//export const SET_USERS = 'SET_USERS';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA'
export const UPDATE_FAVOURITE_DATA = 'UPDATE_FAVOURITE_DATA'
export const UPDATE_COMMENT_DATA = 'UPDATE_COMMENT_DATA'
export const UPDATE_LIKES_DATA = 'UPDATE_LIKES_DATA'

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_APPLICATION_DATA:
            return {
                ...state,
                users: action.users,
                extburgers: action.extburgers,
                favourites: action.favourites,
                comments: action.comments,
                burgerlikes: action.burgerlikes,
                loading: false,
            };
        case UPDATE_FAVOURITE_DATA:
            return {
                ...state,
                favourites: [...state.favourites, action.favourites],
                loading: false,
            };
        case UPDATE_COMMENT_DATA:
            return {
                ...state,
                comments: [...state.comments, action.comments],
                loading: false,
            };
        case UPDATE_LIKES_DATA:
            return {
                ...state,
                burgerlikes: [...state.burgerlikes, action.burgerlikes],
                loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;
