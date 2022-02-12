import React from "react";
import { TodoContext } from "../../App/TodoContext";
import style from './style.module.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] =  React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext); 

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit = {onAdd} className = {style.form}>
      <textarea
        placeholder = "New TODO"
        value = {newTodoValue}
        onChange = {onChange}
        className = {style.textArea}
      ></textarea>
      <div className = {style.containerButtons}>
        <button
          type = "button"
          onClick = {onCancel}
          className = {style.button}
        >
          Cancel
        </button>
        <button
          type = "submit"
          className = {style.button}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };