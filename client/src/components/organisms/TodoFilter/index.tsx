import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../../redux/modules/filter';
import { TodoFilter as Presentaion } from './TodoFilter';

export const TodoFilter: React.FC = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	const handleFilterTodos = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			dispatch(changeFilter({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	return <Presentaion filter={filter} handleFilterTodos={handleFilterTodos} />;
};
