import React from "react";
import style from './style.module.css';

function TodoItem(props) {
  return (
    <li className = {style.todo}>
      <span onClick = {props.onComplete} className = {`${style.complete} ${props.completed && style.todoComplete}`}> 
        √ 
      </span>
      <p className = {`${style.textTodo} ${props.completed && style.textComplete}`}>
        {props.text}
      </p>
      <span onClick = {props.onDelete} className = {style.delete}> 
        x 
      </span>
    </li>
  );
}

export { TodoItem };