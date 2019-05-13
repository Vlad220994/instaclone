import {SET_ACTIVE_USER} from "../constants/actionTypes";

const initialState = {
    user: {},
};

export default function activeUserReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}
