
import moment from "moment";

import useFetch, { useFakeFetch } from "../hooks/useFetch";
import { types } from "../constants/types";
import Swal from "sweetalert2";
import { finishLoading, startLoading } from "./ui";
import fakeDataAuthRefresh from "../FAKEDATA/authRefreshData.json"
import fakeDataAuth from "../FAKEDATA/authData.json"
import fakeDataUser from "../FAKEDATA/userData.json"
export const startLogin = (objcet) => {

    return async(dispatch)=>{
        const resp = useFakeFetch(fakeDataAuth)
        const body = await resp.body;
        if(resp.ok){
            // Me logueo y guardo el token para navegar y realizar acciones en mi app
            // Y mi refesh token para renovar mi token cuando navego en la app
            localStorage.setItem('token',body.access)
            localStorage.setItem('refresh',body.refresh)
            localStorage.setItem('token-init-date',moment().format())
            dispatch(startLoadingUser())
            dispatch(login(body.access))
            

        }else if (resp.status === 401 || resp.status === 400){
            Swal.fire('Error',"Usuario o contraseña incorrecta",'error')
        }
    }
}
export const startLoguinWithGoogle=  (tokens) => {
    return  (dispatch) =>{    
            // Me logueo y guardo el token para navegar y realizar acciones en mi app
            // Y mi refesh token para renovar mi token cuando navego en la appp
            localStorage.setItem('token',tokens.access_token)
            localStorage.setItem('refresh',tokens.refresh_token)
            localStorage.setItem('token-init-date',moment().format())
            dispatch(startLoadingUser())
            dispatch(login(tokens.access_token))
      
     }
        
 }
// import test from "../FAKEDATA/authData.json"
export const startChecking =  () => {
    return async(dispatch) => {

        const resp = useFakeFetch(fakeDataAuthRefresh)
        const body = resp.body
        console.log(body)
        if(resp.ok){
            localStorage.setItem('token',body.access_token)
            localStorage.setItem('token-init-date',moment().format())
            dispatch(startLoadingUser())
            dispatch(login(body.access_token))
        }else{

            dispatch(checkingFinish())
        }
      
    }
}
const checkingFinish = () => ({ type:types.authCheckingFinish})
const login = (access) => ({
    type:types.authLogin,
    payload:access
})

export const startLogout = () =>{
    return ( dispatch) =>{
        localStorage.clear();
        dispatch(logout())
    }
}
const logout = () => ({ type: types.authLogout  })

export const startLoadingUser = () => {
    return async(dispatch) => {
        try {
            const resp = useFakeFetch(fakeDataUser)
            const body = resp.body
            if(resp.ok){
      
                dispatch(loadUser(body))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const loadUser = (user) => ({ 
    type:types.authLoadUser,
    payload:user
 })

 export const startUpdateUser = (data) =>{
     return async(dispatch) =>{
         try {
             dispatch(startLoading())
             const resp = await useFetch('user/',data,'PATCH',true)
             const body = await resp.json()
             if (resp.ok){
                 dispatch(loadUser(body))
                 dispatch(finishLoading())
             }else{
                 dispatch(finishLoading())
                 if(body.hasOwnProperty('id_cats')){

                     Swal.fire('Error',body.id_cats[0],'error')
                 }else{
                    Swal.fire('Error',"Hubo un problema",'error')
                 }
                
             }
         } catch (error) {
            dispatch(finishLoading())
             console.log(error)
         }
     }
 }