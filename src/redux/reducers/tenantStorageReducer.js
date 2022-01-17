import { ADD_NEW_TENANT, DELETE_TENANT } from '../actions/storageActions' 

function manageTenants(state = {tenants: []}, action){

    switch (action.type){
        case ADD_NEW_TENANT:
            const tenantsList = state.tenants || [];
            return {
                ...state,
                tenants: tenantsList.concat(action.payload)
            }
        case DELETE_TENANT:
            const cleanTenantsList = state.tenants
            return{
                ...state,
                tenants: cleanTenantsList.filter(tenant => tenant.userId !== action.payload)
                
            }
        
        default:
            return state
        
    }   
     
}

export default manageTenants