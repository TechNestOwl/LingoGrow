import SET_WORD_INFO from "../action-types/userActionType";

const initialState = [

];

const wordReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_WORD_INFO:
            return state = action.payload;
        default:
            return state;
    }
}
export default wordReducer;