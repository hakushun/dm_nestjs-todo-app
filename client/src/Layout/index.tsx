import React from 'react';
import { Header } from '../components/organisms/Header';

export const Layout: React.FC = React.memo(({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
});
