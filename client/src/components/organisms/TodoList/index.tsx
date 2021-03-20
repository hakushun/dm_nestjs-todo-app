import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTodos,
	selectTodos,
	selectTodosLoading,
} from '../../../redux/modules/todos';
import { Loading } from '../../atoms/Loading';
import { TodoList as Presentational } from './TodoList';

export const TodoList: React.FC = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectTodosLoading);

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Presentational todos={todos} isLoading={isLoading} />
			)}
		</>
	);
};
