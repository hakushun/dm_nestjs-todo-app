import React from 'react';
import styles from './index.module.scss';

export type Props = {
	id: string;
	label: string;
};

export const InputLabel: React.FC<Props> = React.memo((props) => {
	const { id, label } = props;
	return (
		<label className={styles.root} htmlFor={id}>
			{label}
		</label>
	);
});
