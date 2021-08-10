import React from 'react'
import { useSelector } from 'react-redux'
import { MyMaterialTableSearch } from './components/MyMaterialTableSearch'



export const SearchTaskView = () => {
    const {tasks} = useSelector(state => state.tasks)
    return (
        <div className="search-task__conatiner-table">
            <MyMaterialTableSearch  title="Duplicar tareas" data={tasks}/>
        </div>
    )
}
