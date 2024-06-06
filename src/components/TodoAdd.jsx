import React from 'react'
import { useForm } from '../hooks/useForm';

const TodoAdd = ({handleNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = e => {
        e.preventDefault();

        if(description.length <= 1) return
        
        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTodo(newTodo)
        onResetForm();
    }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text"
        className='input-add'
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='¿Que queres hacer kpo?' 
      />

      <button className='btn-add' type='submit'>
        Agregar
      </button>
    </form>
  )
}

export default TodoAdd
