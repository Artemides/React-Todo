import React from 'react'
import './TodosLoading.css'
export const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'>Cargando TODOS... 🤪</p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}
