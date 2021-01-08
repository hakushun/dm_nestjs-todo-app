import React from 'react';
import Link from 'next/link';
import { Logo } from '../../atoms/Logo';
import { NavList } from '../../molecules/NavList';
import styles from './index.module.scss';

export type Props = {
	userInfo: {
		username: string;
	};
	handleLogout: () => void;
};

export const Header: React.FC<Props> = React.memo(
	({ userInfo, handleLogout }) => {
		return (
			<header className={styles.root}>
				<div className={styles.inner}>
					<h1>
						<Link href="/">
							<Logo />
						</Link>
					</h1>
					<NavList username={userInfo.username} method={handleLogout} />
				</div>
			</header>
		);
	},
);
