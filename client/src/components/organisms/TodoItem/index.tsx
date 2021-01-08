import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
	removeTodo,
	Todo,
	TodoStatus,
	updateTodoStatus,
} from '../../../redux/modules/todos';
import { TodoItem as Presentational } from './TodoItem';

export type Props = {
	todo: Todo;
};

export const TodoItem: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { todo } = props;

	const handleSelectStatus = useCallback(
		(id: number, status: TodoStatus) => {
			dispatch(updateTodoStatus({ id, status }));
		},
		[dispatch],
	);

	const handleRemoveTodo = useCallback(
		(id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(removeTodo({ id }));
		},
		[dispatch],
	);

	return (
		<Presentational
			todo={todo}
			handleSelectStatus={handleSelectStatus}
			handleRemoveTodo={handleRemoveTodo}
		/>
	);
};
