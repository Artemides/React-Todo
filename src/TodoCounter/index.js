import React from "react";
import './TodoCounter.css';
function TodoCounter({TodosDone,TodoTotal,loading}){
    return(
        <h2 className={`title ${!!loading && 'todoCounter-loading'}`}>has completado {TodosDone} de {TodoTotal}</h2>
    );
}

export {TodoCounter};
