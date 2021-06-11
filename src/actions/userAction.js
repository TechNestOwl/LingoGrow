import SET_WORD_INFO from "../action-types/userActionType";

export const displayInfo = (dispatch, jsonData) => {
    return dispatch (
        {type: SET_WORD_INFO, payload:jsonData}
        );
};