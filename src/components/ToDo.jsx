import React from 'react';
import { BiEdit } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";

function ToDo({task, toggleComplete, deleteTodo, editTodo}) {
    return (
        <div
            className='flex justify-center items-center space-y-4 space-x-4 border-stone-200 border'
        >
            <p 
                onClick={() => toggleComplete(task.id)}
                className={`${task.completed ? 'completed': ""} 
                    flex justify-start items-start cursor-pointer  font-medium text-xl
                    pl-3`}
            >
                {task.task}
            </p>
            <div
                className='flex justify-center items-center space-x-2 pb-3 float-right pr-3'
            >
                <BiEdit
                    onClick={()=> editTodo(task.id)}
                    size={23}
                    className='text-stone-100'
                />
                <BsTrash3
                    size={23}
                    className='text-red-600'
                    onClick={()=> deleteTodo(task.id)}
                />
            </div>
        </div>
    )
}

export default ToDo
