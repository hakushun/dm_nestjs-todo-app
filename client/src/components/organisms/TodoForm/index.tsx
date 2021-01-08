import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectTodo } from '../../../redux/modules/todo';
import { createTodo } from '../../../redux/modules/todos';
import { TodoForm as Presentational } from './TodoForm';

export const TodoForm: React.FC = () => {
	const dispatch = useDispatch();
	const todo = useSelector(selectTodo);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(change({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(createTodo(todo));
		},
		[todo],
	);

	return (
		<Presentational
			todo={todo}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};
