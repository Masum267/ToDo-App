import React, {useState} from 'react'

function ToDoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className='justify-center items-center space-x-2 p-4'    
        >
            <input 
                type="text" 
                value={value}
                placeholder='Enter your Task'
                onChange={handleChange}
                className='p-2 text-lg border-hidden w-9/12'
            />
            <button
                type='submit'
                className='bg-green-400 p-2 rounded-lg h-12 text-black font-semibold'
            >
                Add Task
            </button>
        </form>
    )
}

export default ToDoForm

