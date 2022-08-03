import React from "react";
import "./TodoSearch.css"
function TodoSearch({search,setSearch,loading}){
    const onSearch=(e)=>{
      setSearch(e.target.value);

    }
    return (
      <input
      className={`TodoSearch ${!!loading && 'todoSearch-loading'} `}
      placeholder="Cebolla"
      value={search}
      onChange={onSearch}
      />
    );
}
export {TodoSearch};
