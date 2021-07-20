import React from 'react'
import { useSelector } from 'react-redux';
import { objectToFormTask } from '../../../utils/objectToFormTask';
import { TaskForm } from './components/TaskForm';

export const DuplicateTaskView = ({match}) => {
    const {
        params: { id },
      } = match;
      
      const {sectors,categories} = useSelector(state => state.maintainers)
      
    // FIXME:  Esto tendria que ser una peticion al details del api
    // Lo hago asi ya que estoy consumiendo un json estatico
    const { tasks } = useSelector(state => state.tasks)
    const currentTask = objectToFormTask( tasks.find( task => {
        return task.id === parseInt(id);
    }))
    return (
    <>
           { currentTask ?
            <TaskForm 
                sectors={sectors}
                categories={categories}
                activeTask={currentTask}
                duplicating={true}
            />
        :
        <p>La tarea no se encuentra disponible</p>
        }
            
    </>
    )
}
