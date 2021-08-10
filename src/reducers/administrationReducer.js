import { types } from "../constants/types";


const initialState = {
    users:{
        active:null,
        usersList:[],
        totalUsers:0
    },
    loading:false,
}

export const administrationRedcuer = ( state= initialState, action) =>{
    switch (action.type) {
        case types.administrationAddUser:
            return {
                ...state,
                users:
                {
                    usersList:[...state.users.usersList,action.payload],
                    totalUsers:state.users.totalUsers+1
                }
                
            }
        case types.administrationUpdateUser:
            return {
                ...state,
                users:{
                    usersList:state.users.usersList.map(user => 
                        user.id === action.payload.id ?
                        action.payload
                        : user
                    )
                }
            }
        case types.administrationDeleteUser:
            return {
                ...state,
                users:{
                    usersList:state.users.usersList.filter(
                        user => (user.id !== action.payload)
                    )
                }
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
                    usersList:[...action.payload.data],
                    totalUsers:action.payload.total
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