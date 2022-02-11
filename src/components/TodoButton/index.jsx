import React from "react";
import { TodoContext } from "../../App/TodoContext";

function TodoButton() {
  const {setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }

  return (
    <button
      onClick = {onClickButton}
    > 
      + 
    </button>
  );
}

export { TodoButton };