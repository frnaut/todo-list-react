
import '../index.css';

import React from 'react'
import { TaskComponent } from './TaskComponent'

export const ListTaskComponent = ({ tasks, handleDelete, handleToggle }) => (
    <div>
        <h1>Tareas</h1>
        <div className="task-list">
            { 
                tasks.map((task, i) => (
                    <TaskComponent 
                        task={task}
                        key={ task.id + i}
                        todo={ task }
                        index={ i }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                ))
            }
        
        </div>
    </div>
)
