import React from 'react';
import { NavButton } from '../../atoms/NavButton';
import { NavLink } from '../../atoms/NavLink';
import styles from './index.module.scss';

export type Props = {
	username: string;
	method: () => void;
};

export const NavList: React.FC<Props> = React.memo((props) => {
	const { username, method } = props;
	return (
		<nav>
			<ul className={styles.root}>
				{username ? (
					<>
						<NavLink path="/todos" text="Todos" />
						<NavButton text="SignOut" method={method} />
					</>
				) : (
					<>
						<NavLink path="/signin" text="SignIn" />
						<NavLink path="/signup" text="SignUp" />
					</>
				)}
			</ul>
		</nav>
	);
});
