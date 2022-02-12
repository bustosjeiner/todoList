import React from "react";
import { TodoContext } from "../../App/TodoContext";
import style from './style.module.css';

function TodoButton() {
  const {setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }

  return (
    <button
      onClick = {onClickButton}
      className = {style.button}
    > 
    + 
    </button>
  )
}

export { TodoButton };