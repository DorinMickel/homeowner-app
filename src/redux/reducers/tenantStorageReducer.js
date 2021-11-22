import { ADD_NEW_TENANT } from '../actions/storageActions' 

function manageTenants(state = {tenants: []}, action){

    switch (action.type){
        case ADD_NEW_TENANT:
            const tenantsList = state.tenants || [];
            return {
                ...state,
                tenants: tenantsList.concat(action.payload)
            }
        
        default:
            return state
        
    }   
     
}

export default manageTenants