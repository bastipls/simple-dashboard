
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDuplicatingTask } from '../../../../actions/tasks'
import { objectToFormJob } from '../../../../utils/objectToFormJob'
import { FormJob } from './FormJob'


export const FormDuplicateJob = ({id,jobActual,jobs,catsUsers}) => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
    const {deals} = useSelector( state => state.hubspot );
    const currentJob = jobs.find( jobObj => {
        return jobObj.job_cats_id === parseInt(id);
    })
    
    useEffect(() => {
        if(jobActual ===  null){
            const jobFormated = objectToFormJob(currentJob)
           dispatch(setDuplicatingTask(jobFormated))
        }
       
    }, [jobActual,dispatch,currentJob])
    return (
    <div>
        {
        /* Esto es para saber si mi trabajo existe o tengo acceso si me comparten la url*/
        currentJob ?
         jobActual &&   <FormJob 
                 catsUsers={catsUsers}  
                 user={user} 
                 jobActive={jobActual} 
                 inProccess={false}
                 duplicating={true}
                 deals={deals}
                 />
        :
        "No existe este empleo o usted no tiene acceso"
             
        }
    </div>
    
    )
}
