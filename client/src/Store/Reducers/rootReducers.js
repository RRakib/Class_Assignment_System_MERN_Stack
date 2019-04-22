// Imports
import { combineReducers } from "redux"
import studentReducer from "./studentReducer"

// RootReducers
const rootReducers = combineReducers({
    student : studentReducer
})

// Exports
export default rootReducers;