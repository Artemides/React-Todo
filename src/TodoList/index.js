import React from "react";
import "./TodoList.css";
export const TodoList = ({
  error,
  onError,
  loading,
  onLoading,
  onEmptyTodos,
  searchedTodos,
  search,
  totalTodos,
  onNotFound,
  children
}) => {
  return (<section>
    {error && onError()}
    {loading && new Array(5).fill(1).map((e,i)=>onLoading(i))}
    {(!loading && !totalTodos) && onEmptyTodos()}
    {(!!totalTodos && !searchedTodos.length) && onNotFound(search)}
    {searchedTodos.map((todo,index)=>children(todo,index))}
  </section>);
};
