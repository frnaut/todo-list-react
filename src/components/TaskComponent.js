
import '../index.css'

import React from 'react'
// `${task.done === true ?? 'complete'}`
export const TaskComponent = ({ task, index, handleDelete, handleToggle }) => {
    return (
        <div key={task.id} className={'task',`${task.done === true ? 'completed' : 'noComplete'}`} >
            <div className="task" onClick={() => handleToggle(task.id)}>
                <span> {index + 1}. {task.desc}</span>
            </div>
            <div>
                <button onClick={() => handleDelete(task.id)} >x</button>
            </div>
        </div>
    )
}
