import Swal from "sweetalert2"
import { types } from "../constants/types"
import  { useFakeFetch } from "../hooks/useFetch"
import chartsFakeData from "../FAKEDATA/chartsData.json";
export const startLoadChartsData =  () => {
    return async(dispatch)=>{
        try {
            dispatch(startLoadingChartsData())
            const resp =  useFakeFetch(chartsFakeData)
            const body = resp.body
            if(resp.ok){
               
                dispatch(chartsDataLoad(body))
                dispatch(finishLoadingChartsData())
            }else{
                Swal.fire('Error',"Hubo un problema, contacte con el administrador",'error')
                dispatch(finishLoadingChartsData())
            }
        } catch (error) {
            Swal.fire('Error',"Hubo un problema, contacte con el administrador",'error')
            dispatch(finishLoadingChartsData())
            console.log(error)
        }
    }
}

const chartsDataLoad = (chartsData) => ({
    type:types.chartsLoad,
    payload:chartsData
})
export const startLoadingChartsData = () => (
    {type:types.chartsStartLoading}
);

export const finishLoadingChartsData= () => (

    {type:types.chartsFinishLoading}
);