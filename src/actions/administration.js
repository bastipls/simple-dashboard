import Swal from "sweetalert2";
import { types } from "../constants/types";
import useFetch from "../hooks/useFetch";
import { finishLoading, startLoading } from "./ui";

// INICIO SECCION USUARIOS
export const startLoadUsers = () => {
    return async(dispatch) => {
        try {
            dispatch(stratLoadingAdministration())
            const resp = await useFetch(`users/`,{},'GET',true)
            const body = await resp.json();
            console.log()
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
export const startUpdateUserGroup = (id,groups) =>{
    return async(dispatch) =>{
        try {
      
            dispatch(startLoading())
            const resp = await useFetch(`users/${id}`,groups,'PATCH',true)
            const body = await resp.json()
            
            if(resp.ok){
                dispatch(administrationUserUpdateGroup(id,body))
                dispatch(finishLoading())
                Swal.fire('Exito!','Grupos actulizados','success')
            
            }else{
                console.log(body)
                dispatch(finishLoading())
                Swal.fire('Error','Algo salió mal','error')
            }
        } catch (error) {
            dispatch(finishLoading())
            Swal.fire('Error','Algo salió mal','error')
            console.log(error)
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
export const startAddGroup = (group) => {
    return async(dispatch) =>{
        try {
            const resp = await useFetch('groups/',group,'POST',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(administrationGroupAdd(body))
            }
        } catch (error) {
            console.log(error)
            Swal.fire("Error",error.message,'error')
        }
    }
}
export const startUpdateGroup = (id,group) =>{
    return async(dispatch) =>{
        try {
      
            dispatch(stratLoadingAdministration())
            const resp = await useFetch(`groups/${id}`,group,'PUT',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(administrationGroupUpdate(id,body))
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

export const startLoadGroups = () => {
    return async(dispatch) => {
        try {
            dispatch(stratLoadingAdministration())
            const resp = await useFetch(`groups/`,{},'GET',true)
            const body = await resp.json();

            if(resp.ok){
                dispatch(administrationGroupsLoad(body))
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

export const startDeleteGroup = (group) =>{
    return async(dispatch) =>{
        try { 
            
            Swal.fire({
                icon:"warning",
                title:"¿Quieres eliminar el contrato? ",
                text:`${group.name}`,
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
                    const resp = await useFetch(`groups/${group.id}`,{},'DELETE',true)
                    if(resp.ok){
                        dispatch(administrationGroupDelete(group.id))
                    
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
const administrationUserUpdateGroup = (id,user) => ({
    type:types.administrationUpdateUserGroup,
    payload:{id,user:{id,...user}}
})
// FIN SECCION USUARIOS
// SECCION GRUPOS
const administrationGroupAdd =(group) => ({
    type:types.administrationAddGroup,
    payload:group
})
const administrationGroupUpdate = (id,group) => ({
    type:types.administrationUpdateGroup,
    payload:{
        id,
        group:{id,...group}
    }
})
const administrationGroupDelete = (groupId) => ({
    type:types.administrationDeleteGroup,
    payload:groupId
})


const administrationGroupsLoad = ( groups ) => ({
    type:types.administrationLoadGroups,
    payload:groups
})
// FIN SECCION GRUPOS
export const stratLoadingAdministration = () => (
    {type:types.administrationStartLoading}
);

export const finishLoadingAdministration= () => (

    {type:types.administrationFinishLoading}
);