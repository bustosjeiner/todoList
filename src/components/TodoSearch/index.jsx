import React from "react";
import { TodoContext } from "../../App/TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const searchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      placeholder = 'Search'
      onChange = {searchValueChange}
      value = {searchValue}
    ></input>
  )
}

export { TodoSearch };