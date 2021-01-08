import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	change,
	selectUserLoading,
	selectUserSignForm,
	signup,
} from '../../../redux/modules/user';
import { Signup as Presentational } from './Signup';

export const Signup: React.FC = () => {
	const dispatch = useDispatch();
	const formdata = useSelector(selectUserSignForm);
	const isLoading = useSelector(selectUserLoading);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(change({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(signup(formdata));
		},
		[formdata],
	);

	return (
		<Presentational
			formdata={formdata}
			isLoading={isLoading}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};
