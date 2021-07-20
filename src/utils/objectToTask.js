export const objectToTask = (task) =>{

    if(Boolean(job) === false){
        return null
    }
 
    const json = { 
        title:task?.title,
        sector:task?.sector?.id,
        categories:task.categories,
        description:task.description
    }
    return json
}