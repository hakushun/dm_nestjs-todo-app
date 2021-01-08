import React from 'react';
import { Todos } from '../components/organisms/Todos';
import { Layout } from '../Layout';

const todos: React.FC = () => {
	return (
		<Layout>
			<Todos />
		</Layout>
	);
};

export default todos;
