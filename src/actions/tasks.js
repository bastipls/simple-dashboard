import Swal from "sweetalert2";
import { types } from "../constants/types";

import { useFakeFetch } from "../hooks/useFetch";
import { finishLoading, startLoading } from "./ui";
import tasksFakeData from "../FAKEDATA/tasksData.json"
import { notificationAdd } from "./notifications";
export const startCreateTask = (task,history) =>{
    return async(dispatch) =>{
        try {
              
            Swal.fire({
                icon:"question",
                title:"¿Quires enviar la tarea? ",
                text:`${task.title}`,
                input:"checkbox",
                inputValidator: (result) =>{
                    return !result && 'Necesita marcar la casilla'
                },
                inputPlaceholder:"Si estoy deacuerdo",
                confirmButtonColor:"#FFCC00",
                confirmButtonText:"Enviar",
                showCancelButton:true,
                cancelButtonText:"Cancelar",
                cancelButtonColor:"#3085d6"
                
             }).then( async (result) =>{
                // FIXME: Estos datos son de prueba por lo que se tiene que hacer una leve modificacion para hacer peticiones reales
                
                 if(result.isConfirmed){
                    dispatch(startLoading())
                    // FIXME: Esto lo puedo agregar si es una peticion real 
                    // Para bloquear acciones en caso de demorar la peticion
                    // Swal.fire({
                    //     title: 'Cargando ...',
                    //     didOpen: () => Swal.showLoading(),
                    //     didClose:() => Swal.hideLoading(),
                    //     allowOutsideClick: false,
                    //     allowEscapeKey: false,
                    //     allowEnterKey: false,
                    //     showConfirmButton:false
                    //   })
                    const resp = { ok:true}
                    Swal.close()
                    Swal.hideLoading();
                    if(resp.ok){
                        // FIXME: Funcion se usa en caso el token tenga expiracion
                        // Este lo renueva cuando se hace alguna accion importante
                        // EN el metodo igual explique algo de como funciona
                        // tokeDetectCloseExpiration(dispatch)
                        setTimeout(() => {
                            dispatch(addTask(task))
                            dispatch(taskCleaning())
                            Swal.fire('Exito!','Tarea creada','success')
                            dispatch(notificationAdd("Tarea creada "))
                            dispatch(finishLoading())
                            
                        }, 2000);
                        
                        
                    }else{
                        Swal.close()
                        Swal.fire('Error','No se pudo enviar, contacte con el administrador','error')
                        dispatch(finishLoading())
                    }
                     
                 }
             })

    
            
        } catch (error) {
            dispatch(finishLoading())
            console.log(error)
            Swal.fire("Error","Hubo un problema contacte al administrador",'error')
        }
    }
}

const addTask = (task) => ({
    type:types.taskAdd,
    payload:task
})

export const startLoadTasks = () =>  {
    return async(dispatch) =>{
        try{
            dispatch(startLoading())
            const resp =  useFakeFetch(tasksFakeData)
            const body = resp.body
            
            if(resp.ok){
                dispatch(loadTasks(body))
                dispatch(finishLoading())
            }else{
                dispatch(finishLoading())
                console.log(body)
            }
        
        }catch(error){
            console.log(error)
            dispatch(finishLoading())
            Swal.fire("Error","Hubo un problema contacte al administrador",'error')
           
        }
    }
}
const loadTasks = (tasks) => ({
    type:types.tasksLoad,
    payload:tasks
})




export const setActiveTask =  (task) => ({
    type:types.tasksSetActive,
    payload:{...task}
})

export const setDuplicatingTask = (task) => ({
    type:types.taskSetDuplicate,
    payload:{...task}
})

export const taskCleaning = () => ({
    type:types.taskCleaning
})

export const jobStratLoading = () => (
    {type:types.tasksStartLoading}
);

export const jobFinishLoading = () => (

    {type:types.tasksFinishLoading}
);