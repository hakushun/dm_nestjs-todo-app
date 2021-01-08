import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	change,
	selectUserSignForm,
	signin,
	selectUserLoading,
} from '../../../redux/modules/user';
import { Signin as Presentational } from './Signin';

export const Signin: React.FC = () => {
	const dispatch = useDispatch();
	const formdata = useSelector(selectUserSignForm);
	const isLoading = useSelector(selectUserLoading);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(change({ name: e.target.name, value: e.target.value }));
	}, []);

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			dispatch(signin(formdata));
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
