import React from "react";
import { TodoContext } from "../../App/TodoContext";

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
    <form onSubmit = {onAdd}>
      <label>...</label>
      <textarea
        placeholder = "New TODO"
        value = {newTodoValue}
        onChange = {onChange}
      ></textarea>
      <div>
        <button
          type = "button"
          onClick = {onCancel}
        >
          Cancel
        </button>
        <button
          type = "submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };