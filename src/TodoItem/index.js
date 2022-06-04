import React from "react";
import "./TodoItem.css";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
function TodoItem({ text, done, onComplete,onDelete }) {
  
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={done}
        onComplete={onComplete}
      />
      <p className={`TodoItem-p ${done && "TodoItem-p--complete"}`}>{text}</p>
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  );
}
export { TodoItem };
