import React from "react";
import style from './style.module.css';

function TodoList(props) {
  return (
    <ul className = {style.listTodos}>
      {props.children}
    </ul>
  );
}

export { TodoList };