import {
    SEARCH_TEXT,
} from "../action-types/userActionType";

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEARCH_TEXT:
        return { ...state, ...payload }

    default:
        return state
    }
};
