import React from 'react';
import styles from './index.module.scss';

export type Props = {
	id: string;
	name: string;
	value?: string;
	method: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
export const FilterSelect: React.FC<Props> = React.memo((props) => {
	const { id, name, value, method } = props;
	return (
		<div className={styles.root}>
			<select id={id} name={name} value={value} onChange={method}>
				<option value="">ALL</option>
				<option value="OPEN">OPEN</option>
				<option value="IN_PROGRESS">IN_PROGRESS</option>
				<option value="DONE">DONE</option>
			</select>
		</div>
	);
});
