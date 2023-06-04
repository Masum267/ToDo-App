import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from "uuid"
import ToDo from './ToDo';
import EditToDoForm from './EditTodoForm';
uuidv4();

function TodoWrapper() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        }])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed
        } : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing
        } : todo
        ))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing} : todo
        ))
    }

    return (
        <div 
            className='justify-center items-center bg-teal-500 w-1/2'
        >
            <h1
                className='text-center text-xl font-bold py-3'
            >
                Get Things Done!
            </h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo} />
                ) : (
                    <ToDo task={todo} key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )

            ))}
        </div>
    )
}

export default TodoWrapper
