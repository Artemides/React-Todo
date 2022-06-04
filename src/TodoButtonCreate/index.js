import React from "react"; 
import "./TodoButtonCreate.css" 
function TodoButtonCreate({openModal,setOpenModal}){
    const toggleModal=()=>{
        setOpenModal(laststate=>!laststate)
    }
    return(
        <button 
            className="TodoButtonCreate"
            onClick={toggleModal}
        >+</button>
    );
}
export {TodoButtonCreate};