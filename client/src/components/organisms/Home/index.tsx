import React from 'react';
import styles from './index.module.scss';

export const Home: React.FC = () => {
	return (
		<section className={styles.root}>
			<h2 className={styles.heading}>NestJS Sample TodoApp.</h2>
		</section>
	);
};
