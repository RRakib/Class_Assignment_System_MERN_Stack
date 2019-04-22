// Imports
import thunk from "redux-thunk"
import rootReducers from "./Reducers/rootReducers"
import { createStore,applyMiddleware } from "redux"

// Middleware
const middleware = [thunk]

// Redux Store
const store = createStore(rootReducers , applyMiddleware(...middleware))

// Exports
export default store