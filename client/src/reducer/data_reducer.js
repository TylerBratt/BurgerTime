//export const SET_USERS = 'SET_USERS';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA'

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_APPLICATION_DATA:
            return {
                ...state,
                users: action.users,
                extburgers: action.extburgers,
                    loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;
