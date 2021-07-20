import { types } from "../constants/types";

const initialState = {
    checking:true,
    access:null,
    user:null,
}

export const authReducer = (state=initialState,action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                access:action.payload,
                checking:false
            };
        case types.authCheckingFinish:
            return {
                ...state,
                checking:false
            }
        case types.authLogout:
            return {
                checking:false,
                access:null,
                user:null
            }
        case types.authLoadUser:
            return {
                ...state,
                user:{...action.payload}
            }

        default:
            return state;
    }
}