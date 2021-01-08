import React from 'react';
import styles from './index.module.scss';

export type Props = {
	legend: string;
	submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const Form: React.FC<Props> = React.memo((props) => {
	const { legend, submit, children } = props;
	return (
		<form className={styles.root} onSubmit={submit}>
			<fieldset>
				<legend>{legend}</legend>
				{children}
			</fieldset>
		</form>
	);
});
