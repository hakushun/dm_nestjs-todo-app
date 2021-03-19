import React from 'react';
import { Dialog } from '../Dialog';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

export const Todos: React.FC = () => {
	return (
		<>
			<Dialog />
			<TodoForm />
			<TodoList />
		</>
	);
};
