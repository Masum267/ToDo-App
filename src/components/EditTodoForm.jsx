import React, {useState} from 'react'

function EditToDoForm({editTodo, task}) {
    const [value, setValue] = useState(task.task);

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value}
                placeholder='Update Task'
                onChange={handleChange}
            />
            <button
                type='submit'
            >
                Update Task
            </button>
        </form>
    )
}

export default EditToDoForm


