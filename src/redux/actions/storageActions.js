// action types

export const ADD_NEW_MEMBER = 'ADD_NEW_MEMBER';
export const ADD_NEW_COMMUNITY = 'ADD_NEW_COMMUNITY'

// member storacge actions creator

export function addNewMember (memberObj) {
    return (
        {
            type: ADD_NEW_MEMBER,
            payload: memberObj
        }
    )
}

export function addNewCommunity (communityObj) {
    return (
        {
            type: 'ADD_NEW_COMMUNITY',
            payload: communityObj
        }
    )
}