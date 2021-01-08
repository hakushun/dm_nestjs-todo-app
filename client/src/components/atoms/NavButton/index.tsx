import React from 'react';
import styles from './index.module.scss';

export type Props = {
	text: string;
	method: () => void;
};

export const NavButton: React.FC<Props> = React.memo((props) => {
	const { text, method } = props;
	return (
		<li>
			<button className={styles.root} type="button" onClick={method}>
				{text}
			</button>
		</li>
	);
});
