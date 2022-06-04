import React from 'react'
import { TodoIcon } from "./index";
export const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon 
        type="delete"
        onClick={onDelete}
    />
  )
}
