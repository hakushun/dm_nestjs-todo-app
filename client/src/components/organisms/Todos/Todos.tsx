import React from 'react';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

export const Todos: React.FC = () => {
	return (
		<>
			<TodoForm />
			<TodoList />
		</>
	);
};
