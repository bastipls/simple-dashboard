import Swal from "sweetalert2";
import { types } from "../constants/types";
import useFetch, { useFakeFetch } from "../hooks/useFetch";
import categoryFakeData from "../FAKEDATA/categoriesData.json";
import sectorsFakeData from "../FAKEDATA/sectorData.json";

export const startLoadAllMaintainers = () => {
    return async(dispatch) => {
        try {
            dispatch(maintainersStartLoading())
            const respCategory = useFakeFetch(categoryFakeData)
            const respSector = useFakeFetch(sectorsFakeData);
            const bodyCategory = respCategory.body;
            const bodySector = respSector.body;
            dispatch(sectorsLoad(bodySector))
            dispatch(categoriesLoad(bodyCategory))
            dispatch(maintainersFinishLoading())
        } catch (error) {
            console.log(error)
            dispatch(maintainersFinishLoading())
            Swal.fire("Error",error.message,'error')
        }
    }
}

// INICIO SECCION HABILIDADES
export const startAddCategory = (category) => {
    return async(dispatch) =>{
        try {
            
            // FIXME: En este lugar iria una peticion asincrona asi 
            // en este caso solo la simulo
            setTimeout(() => {
                const resp = {ok:true}
                
                 if(resp.ok){
                  
                     dispatch(categoryAdd(category))
                 }
            }, 1000);
        } catch (error) {
            console.log(error)
            Swal.fire("Error",error.message,'error')
        }
    }
}
export const startUpdateCategory= (id,category) =>{
    return async(dispatch) =>{
        try {
            // TODO: seguir arreglando los mantenedores
            // para simular las peticiones
      
    
            const resp = await useFetch(`skill/${id}`,category,'PUT',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(categoryUpdate(body))
            
            }else{
                Swal.fire('Error','Algo salió mal','error')
            }
        } catch (error) {
            Swal.fire('Error','Algo salió mal','error')
            console.log(error)
        }
    }
}

export const startLoadCategory= () => {
    return async(dispatch) =>{
        try{
            const resp = useFakeFetch(categoryFakeData)
            const body = resp.body;
            if(resp.ok){
                dispatch(categoriesLoad(body))
            }
        
        }catch(error){
            console.log(error)
            Swal.fire("Error","Hubo un problema contacte al administrador",'error')
           
        }
    }
}

export const startDeleteCategory = (category) =>{
    return async(dispatch) =>{
        try { 
            
            Swal.fire({
                icon:"warning",
                title:"¿Quieres eliminar la habilidad? ",
                text:`${category.name}`,
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
                    const resp = await useFetch(`skill/${category.id}`,{},'DELETE',true)
                    if(resp.ok){
                        dispatch(categoryDelete(category.id))
                    
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

const categoriesLoad = (categories)=>({
    type:types.categoryLoad,
    payload:categories
})
const categoryAdd = (category) => ({
    type:types.categoryAdd,
    payload:category
})
const categoryUpdate = (category) => ({
    type:types.categoryUpdate,
    payload:category
})
const categoryDelete = (categoryID) => ({
    type:types.categoryDelete,
    payload:categoryID
})
// FIN SECCION HABILIDADES

// INICIO SECCION SECTORES

export const startAddSector = (sector) => {
    return async(dispatch) =>{
        try {
            const resp = await useFetch('sector/',sector,'POST',true)
            const body = await resp.json()
           
            if(resp.ok){
                dispatch(sectortAdd(body))
            }
        } catch (error) {
            console.log(error)
            Swal.fire("Error",error.message,'error')
        }
    }
}

export const startUpdateSector = (id,sector) =>{
    return async(dispatch) =>{
        try {
      
    
            const resp = await useFetch(`sector/${id}`,sector,'PUT',true)
            const body = await resp.json()
            if(resp.ok){
                dispatch(sectorUpdate(id,body))
            
            }else{
                Swal.fire('Error','Algo salió mal','error')
            }
        } catch (error) {
            Swal.fire('Error','Algo salió mal','error')
            console.log(error)
        }
    }
}

export const startLoadSectors= () => {
    return async(dispatch) =>{
        try{
            const resp = useFakeFetch(sectorsFakeData);
            const body = resp.body
            if(resp.ok){
                dispatch(sectorsLoad(body))
            }
        
        }catch(error){
            console.log(error)
            Swal.fire("Error","Hubo un problema contacte al administrador",'error')
           
        }
    }
}
export const startDeleteSector = (sector) =>{
    return async(dispatch) =>{
        try { 
            
            Swal.fire({
                icon:"warning",
                title:"¿Quieres eliminar el sector? ",
                text:`${sector.name}`,
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
                    const resp = await useFetch(`sector/${sector.id}`,{},'DELETE',true)
                    if(resp.ok){
                        dispatch(sectortDelete(sector.id))
                    
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

const sectorsLoad = (sectors)=>({
    type:types.sectorLoad,
    payload:sectors
})
const sectortAdd = (sector) => ({
    type:types.sectorAdd,
    payload:sector
})
const sectorUpdate = (id,sector) => ({
    type:types.sectorUpdate,
    payload:{
        id,
        sector:{id,...sector}
    }
})

const sectortDelete = (sectorId) => ({
    type:types.sectorDelete,
    payload:sectorId
})

// FIN SECCION SECTORES

const maintainersStartLoading = () => (
    {type:types.maintainersStartLoading}
);

const maintainersFinishLoading = () => (

    {type:types.maintainersFinishLoading}
);

