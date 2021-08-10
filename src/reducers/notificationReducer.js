import { types } from "../constants/types";

const initialState ={
    notifications:[
        
    ],
    loading:false
}
export const notificationReducer = (state= initialState,action) => {
    switch (action.type) {
        case types.notificationAdd:
            return {
                ...state,
                notifications:[...state.notifications,action.payload]
            }
        case types.notificationDelete:
            return {
                ...state,
                notifications:state.notifications.filter( 
                    notification => (notification.id !== action.payload )
                    )
            }
        default:
            return state;
    }
}
