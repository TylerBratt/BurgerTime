//export const SET_USERS = 'SET_USERS';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA'
export const UPDATE_FAVOURITE_DATA = 'UPDATE_FAVOURITE_DATA'
export const UPDATE_COMMENT_DATA = 'UPDATE_COMMENT_DATA'
export const NEW_BURGER_DATA = 'NEW_BURGER_DATA'

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_APPLICATION_DATA:
            return {
                ...state,
                users: action.users,
                extburgers: action.extburgers,
                favourites: action.favourites,
                comments: action.comments,
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
        case NEW_BURGER_DATA:
            return {
                ...state,
                newBurgers: [...state.newBurgers, action.newBurgers],
                loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;
