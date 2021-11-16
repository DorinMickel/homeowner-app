import { combineReducers } from "redux";
import members from './memberStorageReducer'
import communities from './communityStorageReducer'


export default combineReducers({
    members,
    communities,

})