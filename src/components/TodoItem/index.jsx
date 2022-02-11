import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span onClick = {props.onComplete}> 
        √ 
      </span>
      <p>
        {props.text}
      </p>
      <span onClick = {props.onDelete}> 
        x 
      </span>
    </li>
  );
}

export { TodoItem };