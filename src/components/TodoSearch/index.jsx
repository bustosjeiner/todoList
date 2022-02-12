import React from "react";
import { TodoContext } from "../../App/TodoContext";
import style from './style.module.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const searchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className = {style.containerSearch}>
      <input 
        placeholder = 'Search'
        onChange = {searchValueChange}
        value = {searchValue}
        className = {style.search}
      />
    </div>
  )
}

export { TodoSearch };