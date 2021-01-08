import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export type Props = {
	path: string;
	text: string;
};

export const NavLink: React.FC<Props> = React.memo((props) => {
	const { path, text } = props;
	return (
		<li>
			<Link href={path}>
				<a className={styles.root} href={path}>
					{text}
				</a>
			</Link>
		</li>
	);
});
