// Imports
import { combineReducers } from "redux"
import studentReducer from "./studentReducer"

// RootReducers
const rootReducers = combineReducers({
    students : studentReducer
})

// Exports
export default rootReducers;