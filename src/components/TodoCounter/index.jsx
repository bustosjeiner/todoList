import React from 'react';
import { TodoContext } from '../../App/TodoContext';
import style from './style.module.css';

function TodoCounter() {
	const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
		<h2 className = {style.counter}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
	);
}

export { TodoCounter };