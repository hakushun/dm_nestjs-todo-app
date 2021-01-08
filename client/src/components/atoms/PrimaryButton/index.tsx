import React from 'react';
import styles from './index.module.scss';

export type Props = {
	type: 'button' | 'submit' | 'reset';
	text: string;
	disabled: boolean;
};

export const PrimaryButton: React.FC<Props> = React.memo((props: Props) => {
	const { type, disabled, text } = props;
	return (
		<button className={styles.root} type={type} disabled={disabled}>
			{text}
		</button>
	);
});
