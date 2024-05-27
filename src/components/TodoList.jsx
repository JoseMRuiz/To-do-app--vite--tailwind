import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
    return (
        <>
        <div className="mt-8 rounded-md [&>article]:p-4 bg-white">
            
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo= {todo}/>
            ))}



            </div>
        
        </>
        
    )
}

export default TodoList;