import React from 'react';
import styles from './index.module.scss';

export type Props = {
	value: string;
	method: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const StatusSelect: React.FC<Props> = React.memo((props) => {
	const { value, method } = props;
	return (
		<div className={styles.root}>
			<select value={value} onChange={method}>
				<option value="OPEN">OPEN</option>
				<option value="IN_PROGRESS">IN_PROGRESS</option>
				<option value="DONE">DONE</option>
			</select>
		</div>
	);
});
