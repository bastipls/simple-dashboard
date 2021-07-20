import { types } from "../constants/types";


const initialState = {
    dataCharts:[],
    loading:false
}
// TODO agregarlo al store y types
export const chartsReducer = ( state= initialState, action) =>{
    switch (action.type) {
        case types.chartsLoad:
            return {
                ...state,
                dataCharts:action.payload
            }
        case types.chartsStartLoading:
            return {
                ...state,
                loading:true

            }
        case types.chartsFinishLoading:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}