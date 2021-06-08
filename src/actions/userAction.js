import {
    SEARCH_TEXT,
} from "../action-types/userActionType";

export const searchInput = (dispatch) => {
    return dispatch ({type:SEARCH_TEXT, payload:e.target.value});
};