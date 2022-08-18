//import './App.css';
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButtonCreate } from "../TodoButtonCreate";
import { Modal } from "./Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import {useTodos} from "../hooks/useTodos";
import {ChangeAlertWithStorageEvent} from "../ChangeAlert"
function App() {
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
    addTodo,
    syncronizeTodos
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter TodosDone={TodosDone} TodoTotal={TodoTotal} />
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>
      <TodoList
        error={error}
        onError={()=><TodosError error={"error"}/>}
        loading={loading}
        onLoading={index=><TodosLoading key={index}/>}
        onEmptyTodos={()=><EmptyTodos/>}
        search={search}
        totalTodos={TodoTotal}
        onNotFound={(searchedText)=>(<p>No hay resultados para "{searchedText}" 😓</p>)}
        searchedTodos={searchedTodos}
        // render={(todo,index)=>(
        //   <TodoItem
        //     key={index}
        //     text={todo.text}
        //     done={todo.done}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}

      >
        {(todo,index)=>(
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <TodoButtonCreate setOpenModal={setOpenModal} openModal={openModal} />
    <ChangeAlertWithStorageEvent
      syncronize={syncronizeTodos}
    />
    </React.Fragment>

  );
}

export default App;
