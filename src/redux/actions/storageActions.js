// action types

export const ADD_NEW_TENANT = 'ADD_NEW_TENANT';
export const ADD_NEW_COMMUNITY = 'ADD_NEW_COMMUNITY';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER'

// tenants storage actions creator

export function addNewTenant (tenantObj) {
    return (
        {
            type: ADD_NEW_TENANT,
            payload: tenantObj
        }
    )
}

export function addNewCommunity (communityObj) {
    return (
        {
            type: ADD_NEW_COMMUNITY,
            payload: communityObj
        }
    )
}

export function setActiveUser (userObj) {
    return (
        {
            type: SET_ACTIVE_USER,
            payload: userObj
        }
    )
}