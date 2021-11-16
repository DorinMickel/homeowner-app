import { ADD_NEW_COMMUNITY } from '../actions/storageActions' 

function manageCommunities(state = {communities: []}, action){

    switch (action.type){
        case ADD_NEW_COMMUNITY:
            const communitiesList = state.communities || [];
            return {
                ...state,
                communities: communitiesList.concat(action.payload)
            }
        
        default:
            return state
        
    }   
     
}

export default manageCommunities