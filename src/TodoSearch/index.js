import React from "react";  
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"
function TodoSearch(){
    const {search,setSearch} = React.useContext(TodoContext);
    const onSearch=(e)=>{
      setSearch(e.target.value);
      
    }
    return (
      <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value={search}
      onChange={onSearch}
      />
    );
}
export {TodoSearch};