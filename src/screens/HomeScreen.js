

import React, { useReducer, useEffect } from 'react'
import {Reducer} from '../hooks/Reducer';
import { ListTaskComponent } from '../components/ListTaskComponent';
import { FormularioComponent } from '../components/FormularioComponent';

const init = () =>{
    
    let tasks = localStorage.getItem('tasks');
    if(tasks === undefined || tasks == null){
        return [];
    }
    
    return JSON.parse(tasks);
}

export const HomeScreen = () => {

    const [tasks, dispatch ] = useReducer(Reducer,[], init);

    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]);

    const handleDelete = (taskId) => {
         
        dispatch({
            type: 'delete',
            payload: taskId
        });
    };

    const handleToggle = (taskId) => {
        
        dispatch({
            type:'toggle',
            payload: taskId
        });
    };

    const handleAddTask = (newTask) =>{
        dispatch({
            type:'add',
            payload: newTask
        });
    };

    return (
        <div className="contenedor">
            <div className="top">

            </div>
            <div className="contenido d-flex row col-12">
                <div className="col-5">
                    <ListTaskComponent
                        tasks={ tasks }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <FormularioComponent handleAddTask={handleAddTask}/>
                </div>
            </div>
        </div>
    )
}
