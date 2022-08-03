import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const useTodos = () => {
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos_v1", []);
  const TodoTotal = todos.length;
  const TodosDone = todos.filter((todo) => !!todo.done).length;

  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((e) =>
      e.text.toLowerCase().includes(search.toLowerCase())
    );
  }
  //Añadir Todo
  const addTodo = (text) => {
    let newTodos = [...todos];
    newTodos.push({ text: text, done: false });
    saveTodos(newTodos);
  };
  //Completar Todo
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = searchedTodos.findIndex((todo) => todo.text === text);
    newTodos[index].done = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    let newTodos = [...todos];
    const index = searchedTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };
  console.log(" Antes del Efecto");
  React.useEffect(() => {
    console.log("efecto");
  }, [TodoTotal]);

  console.log(" Después del Efecto");
  return {
    loading,
    error,
    TodoTotal,
    TodosDone,
    search,
    setSearch,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  };
};
