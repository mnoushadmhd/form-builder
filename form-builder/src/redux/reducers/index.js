import { combineReducers } from "redux"
import { builderReducer } from "./BuilderReducer"
const reducers = combineReducers({
    allItems: builderReducer
})
export default reducers;