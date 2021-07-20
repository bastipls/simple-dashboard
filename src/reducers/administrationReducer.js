import { types } from "../constants/types";


const initialState = {
    groups:[],
    users:{
        active:null,
        usersList:[]
    },
    loading:false,
}

export const administrationRedcuer = ( state= initialState, action) =>{
    switch (action.type) {
        case types.administrationAddGroup:
            return {
                ...state,
                groups:[...state.groups,action.payload]
            }
        case types.administrationLoadGroups:
            return {
                ...state,
                groups:[ ...action.payload ]
            }
        case types.administrationUpdateGroup:
            return {
                ...state,
                groups:state.groups.map(group => 
                    group.id === action.payload.id ?
                    action.payload.group
                    : group
                )
            }
        case types.administrationDeleteGroup:
            return {
                ...state,
                groups:state.groups.filter(
                    group => (group.id !== action.payload)
                )
            }
        case types.administrationSetUserActive:
            return {
                ...state,
                users:{
                    usersList:[...state.users.usersList],
                    active:{...action.payload}
                 
                }
            }
        case types.administrationLoadUsers:
            return {
                ...state,
                users:{
                    active:null,
                    usersList:[...action.payload]
                } 
            }
        case types.administrationUpdateUserGroup:
            return {
                ...state,
                users:{
                    active:action.payload.user
                }
            }

        case types.administrationStartLoading:
            return {
                ...state,
                loading:true
            }
        case types.administrationFinishLoading:
            return {
                ...state,
                loading:false

            }

        default:
            return state;
    }
}