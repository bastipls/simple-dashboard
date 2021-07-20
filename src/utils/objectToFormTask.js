export const objectToFormTask = (task) =>{

    if(Boolean(task) === false){
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