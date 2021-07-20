import Swal from "sweetalert2";
import { types } from "../constants/types";
import useFetch from "../hooks/useFetch";




export const startLoadCatsUsers =  () => {
    return async(dispatch)=>{
        try {
            dispatch(catsStartLoading())
            const resp = await useFetch('cats-users/',{},'GET',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(loadCatsUser(body))
                dispatch(catsFinishLoading())
            }else{
                Swal.fire('Error',"Hubo un problema, contacte con el administrador",'error')
                dispatch(catsFinishLoading())
            }
        } catch (error) {
            Swal.fire('Error',"Hubo un problema, contacte con el administrador",'error')
            dispatch(catsFinishLoading())
            console.log(error)
        }
    }
}

const loadCatsUser = (catsUsers) => ({
    type:types.catsLoadUsers,
    payload:catsUsers
})

export const catsStartLoading = () => (
    {type:types.catsStartLoading}
);

export const catsFinishLoading = () => (

    {type:types.catsFinishLoading}
);