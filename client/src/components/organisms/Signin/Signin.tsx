import React from 'react';
import { SignForm } from '../SignForm';

export type Props = {
	formdata: { username: string; password: string };
	isLoading: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const Signin: React.FC<Props> = React.memo((props) => {
	const { formdata, isLoading, handleChange, handleSubmit } = props;

	return (
		<SignForm
			type="signin"
			username={formdata.username}
			password={formdata.password}
			legend="SignIn Form"
			text="Sign In"
			disabled={isLoading}
			isLoading={isLoading}
			change={handleChange}
			submit={handleSubmit}
		/>
	);
});
