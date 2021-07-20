import { types } from "../constants/types";

const initialState = {
    visibilitySideBar:false,
    loading:false,
    modal:false
}

export const uiReducer  = (state= initialState,action) =>{
    switch (action.type) {

        case types.uiShowSideBar:
            return {
                ...state,
                visibilitySideBar:action.payload
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading:true

            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading:false
            }



        case types.uiOpenModal:
            return {
                ...state,
                modal:true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modal:false
            }
        default:
            return state;
    }
}