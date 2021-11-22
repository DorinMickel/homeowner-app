import { combineReducers } from "redux";
import tenants from './tenantStorageReducer'
import communities from './communityStorageReducer';
import activeUser from './activeUserReducer'


export default combineReducers({
    tenants,
    communities,
    activeUser

})