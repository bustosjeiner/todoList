import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';
import { Modal } from '../components/Modal'
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch	/>

      <TodoList>
      {error && <p>Hubo un error, intente nuevamente</p>}
      {loading && <p>Cargando</p>}
      {(!loading && !searchTodos.length) && <p>Crea tu primer TODO</p>}
      
      {searchTodos.map (todo => (
        <TodoItem 
          key = {todo.text}
          text = {todo.text}
          completed = {todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <TodoButton 
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };