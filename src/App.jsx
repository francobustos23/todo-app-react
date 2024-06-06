import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { useTodo } from './hooks/useTodo'

function App() {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo()
  return (
    <>
    <div className="card-to-do">
      <h1>Lista de tareas</h1>
      <div className="counter-todos">
        <h3>N° Tareas: <span>{todosCount}</span></h3>
        <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
      </div>
      <div className="add-todo">
        <h3>Agregar Tarea</h3>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
    </div>
    <TodoList 
      todos={todos}
      handleCompleteTodo={handleCompleteTodo}
      handleUpdateTodo={handleUpdateTodo}
      handleDeleteTodo={handleDeleteTodo}
    />
    </>
  )
}

export default App
