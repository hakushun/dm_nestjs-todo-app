import React from 'react';
import styles from './index.module.scss';

export type Props = {
	type: 'button' | 'submit' | 'reset';
	text: string;
	disabled: boolean;
	method: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SecondaryButton: React.FC<Props> = React.memo((props: Props) => {
	const { type, disabled, text, method } = props;
	return (
		<button
			className={styles.root}
			type={type}
			onClick={method}
			disabled={disabled}>
			{text}
		</button>
	);
});
