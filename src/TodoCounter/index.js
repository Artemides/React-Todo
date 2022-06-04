import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';
function TodoCounter(){
    const {TodosDone,TodoTotal} = React.useContext(TodoContext);
    return(
        <h2 className="title">has completado {TodosDone} de {TodoTotal}</h2>
    );
}

export {TodoCounter};