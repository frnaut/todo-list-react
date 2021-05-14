
import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormularioComponent = ({handleAddTask}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const task = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTask(task);
        reset();
    }


    return (
        <>
            <h1>Nueva Tarea</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        name="description"
                        className="mb-3 form-control" 
                        type="text" 
                        placeholder="Nueva tarea"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={description}
                    />
                        
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-outline-primary ">Guardar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
