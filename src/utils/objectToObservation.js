
export const objectToObservation = (observation) =>{
   

    const json = { 
        user:observation.user.id,
        job:observation.job,
        camunda_task_name:observation.camunda_task_name,
        commentary:observation.commentary,
        rejected:observation.rejected
    }

    return json
}