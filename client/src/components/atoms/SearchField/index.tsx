import React from 'react';
import styles from './index.module.scss';

export type Props = {
	id: string;
	type: string;
	name: string;
	value?: string;
	method: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export const SearchField: React.FC<Props> = React.memo((props) => {
	const { id, type, name, value, method } = props;
	return (
		<input
			className={styles.root}
			id={id}
			type={type}
			name={name}
			value={value}
			onChange={method}
		/>
	);
});
