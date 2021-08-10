import Swal from "sweetalert2";
import { types } from "../constants/types";
import useFetch, { useFetchAny } from "../hooks/useFetch";


// INICIO SECCION USUARIOS
export const startLoadUsers = (page) => {
    return async(dispatch) => {
        try {
            dispatch(stratLoadingAdministration())
            const resp = await useFetchAny(`https://reqres.in/api/users?page=${page}`,{},'GET',true)
            const body = await resp.json();
            if(resp.ok){
                dispatch(administrationUsersLoad(body))
                dispatch(finishLoadingAdministration())
            }else{
                console.log(body)
                dispatch(finishLoadingAdministration())
            }
        } catch (error) {
            console.log(error)
            dispatch(finishLoadingAdministration())
        }
    }
}

export const startLoadUserActive = (id) =>{
    return async(dispatch) => {
        try {
            dispatch(stratLoadingAdministration())
            const resp = await useFetch(`users/${parseInt(id)}`,{},'GET',true)
            const body = await resp.json();
           
            if(resp.ok){
                dispatch(administrationSetActiveUser(body))
                dispatch(finishLoadingAdministration())
            }else{
                console.log(body)
                dispatch(finishLoadingAdministration())
            }
        } catch (error) {
            console.log(error)
            dispatch(finishLoadingAdministration())
        }
    }
}
// FIN SECCION USUARIOS
// INICIO SECCION GRUPOS
export const startAddUser = (user) => {
    return async(dispatch) =>{
        try {
            const resp = await useFetchAny(`https://reqres.in/api/users`,user,'POST')
            const body = await resp.json()
            if(resp.ok){
                dispatch(administrationUserAdd(body))
                Swal.fire("Exito","Usuario creado! <br>El usuario no se verá reflejado debido a que se usan APIs gratuitas",'success')
            }
        } catch (error) {
            console.log(error)
            Swal.fire("Error",error.message,'error')
        }
    }
}
export const startUpdateUser = (id,user) =>{
    return async(dispatch) =>{
        try {
      
            dispatch(stratLoadingAdministration())
            const resp = await useFetch(`groups/${id}`,user,'PUT',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(administrationUserUpdate(id,body))
                dispatch(finishLoadingAdministration())
            }else{
                console.log(body)
                dispatch(finishLoadingAdministration())
                Swal.fire('Error','Algo salió mal','error')
            }
        } catch (error) {
            dispatch(finishLoadingAdministration())
            Swal.fire('Error','Algo salió mal','error')
            console.log(error)
        }
    }
}


export const startDeleteUser = (user) =>{
    return async(dispatch) =>{
        try { 
            
            Swal.fire({
                icon:"warning",
                title:"¿Quieres eliminar el usuario? ",
                text:`${user.first_name}`,
                input:"checkbox",
                inputValidator: (result) =>{
                    return !result && 'Necesita marcar la casilla'
                },
                inputPlaceholder:"Si estoy deacuerdo",
                confirmButtonColor:"#d33",
                confirmButtonText:"Eliminar",
                showCancelButton:true,
                cancelButtonText:"Cancelar",
                cancelButtonColor:"#3085d6"
                
             }).then( async (result) =>{
         
                 if(result.isConfirmed){
                    const resp = await useFetchAny(`groups/${user.id}`,{},'DELETE',true)
                    if(resp.ok){
                        dispatch(administrationUserDelete(user.id))
                    
                    }else{
                
                        Swal.fire('Error','Algo salió mal','error')
                    }
                     
                 }
             })
        } catch (error) {
            Swal.fire(
                'Error',
                'Lo sentimos, algo salió mal',
                'error'
              )
            console.log(error)
        }
    }
}
// FIN SECCION GRUPOS
// SECCION USUARIOS
const administrationUsersLoad = (users) => ({
    type:types.administrationLoadUsers,
    payload:users
})
const administrationSetActiveUser =  (user) => ({
    type:types.administrationSetUserActive,
    payload:{...user}
})

// FIN SECCION USUARIOS
// SECCION GRUPOS
const administrationUserAdd =(user) => ({
    type:types.administrationAddUser,
    payload:user
})
const administrationUserUpdate = (id,user) => ({
    type:types.administrationUpdateUser,
    payload:{
        id,
        group:{id,...user}
    }
})
const administrationUserDelete = (userId) => ({
    type:types.administrationDeleteUser,
    payload:userId
})



// FIN SECCION GRUPOS
export const stratLoadingAdministration = () => (
    {type:types.administrationStartLoading}
);

export const finishLoadingAdministration= () => (

    {type:types.administrationFinishLoading}
);