import React from 'react';
import { withAuth } from '../../../helpers/withAuth';
import { Todos as Presentational } from './Todos';

const Component: React.FC = () => {
	return <Presentational />;
};

export const Todos = withAuth(Component);
