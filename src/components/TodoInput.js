import React, { useState, useEffect } from 'react'
import './TodoInput.css';

const TodoInput = ({ createTodo, edit, editToDo, handleEdit }) => {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit && handleEdit) {
            editToDo.task = task;
            handleEdit(editToDo)
        }else {
            createTodo(task);
        }
        setTask('');
    }

    useEffect(() => {
        setTask(editToDo.task)
    }, [editToDo.task])
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter task" id="task" name="task"
                value={task} onChange={(e) => setTask(e.target.value)} />
            {
                edit ? (
                    <button>Edit Todo</button>
                ) : (
                    <button>Add Todo</button>
                )
            }
        </form>
    )
}

export default TodoInput;