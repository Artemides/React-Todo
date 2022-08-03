import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButtonCreate } from "../TodoButtonCreate";
import { TodoContext } from "../TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
export const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    TodosDone,
    TodoTotal,
    search,
    setSearch,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter TodosDone={TodosDone} TodoTotal={TodoTotal} />
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>
      <TodoList>
        {error && <TodosError error={"error"} />}
        {loading &&
          new Array(5).fill(1).map((e, i) => <TodosLoading key={i} />)}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButtonCreate setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
};
