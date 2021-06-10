import { combineReducers } from "redux"
import wordReducer from "./wordReducer"

const rootReducer = combineReducers({
    wordInfo : wordReducer
})

export default rootReducer;