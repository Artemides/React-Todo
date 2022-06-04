import React from 'react'
import { TodoContext } from '../TodoContext';
import "./TodoForm.css"
export const TodoForm = () => {
  const {
    addTodo,
    setOpenModal
    }=React.useContext(TodoContext)
  const [todo, setTodo] = React.useState({});
  const onCancel=()=>{
        setOpenModal(false)

  };
  const onSubmit=(event)=>{
      event.preventDefault();
      addTodo(todo)
      setOpenModal(false)
  }
  const onChange=(event)=>{
    setTodo(event.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
        <label>Agregar un Nuevo Todo</label>
        <textarea 
        value={todo}
        onChange={onChange}
        placeholder='Crea tu nuevo todo'/>
        <div className='TodoForm-buttonContainer'>
            <button
                className='TodoButton TodoForm-button-cancel'
                type='button'
                onClick={onCancel}
            >
                Cancel
            </button>
            <button 
                className='TodoButton TodoForm-button-add'
            type='submit'>
                Añadir
            </button>
        </div>
    </form>
  )
}

