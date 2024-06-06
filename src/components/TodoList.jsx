import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                handleCompleteTodo={handleCompleteTodo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
            />)}

        </ul>
    )
}

export default TodoList
