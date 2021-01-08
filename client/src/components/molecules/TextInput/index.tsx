import React from 'react';
import { TextField } from '../../atoms/TextField';
import { InputLabel } from '../../atoms/InputLabel';

export type Props = {
	label: string;
	id: string;
	type: string;
	name: string;
	value: string;
	method: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput: React.FC<Props> = React.memo((props) => {
	const { label, id, type, name, value, method } = props;
	return (
		<>
			<InputLabel id={id} label={label} />
			<TextField
				id={id}
				type={type}
				name={name}
				value={value}
				method={method}
			/>
		</>
	);
});
