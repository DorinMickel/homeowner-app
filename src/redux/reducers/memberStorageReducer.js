import { ADD_NEW_MEMBER } from '../actions/storageActions' 

function manageMembers(state = {members: []}, action){

    switch (action.type){
        case ADD_NEW_MEMBER:
            const membersList = state.members || [];
            return {
                ...state,
                members: membersList.concat(action.payload)
            }
        
        default:
            return state
        
    }   
     
}

export default manageMembers