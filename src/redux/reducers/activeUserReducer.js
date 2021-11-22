import { SET_ACTIVE_USER } from "../actions/storageActions";

function manageActiveUser (state = {activeUser: {}}, action) {
    switch(action.type){

        case SET_ACTIVE_USER:
            const activeTenant = action.payload || {};
            return {
                ...state,
                activeUser: activeTenant
            }
        
        default:
            return state
    }
}

export default manageActiveUser