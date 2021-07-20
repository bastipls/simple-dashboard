import React from 'react'
import { useSelector } from 'react-redux'
import { TaskForm } from './components/TaskForm'

export const TaskFormView = () => {
    const {sectors,categories} = useSelector(state => state.maintainers)
    const { active:activeTask } = useSelector(state => state.tasks)
    return (
       <TaskForm  
            sectors={sectors} 
            categories={categories} 
            activeTask={activeTask}
            duplicating={false}
        />
    )
}
