import React from 'react';
import { SearchInput } from '../../molecules/SearchInput';
import { FilterField } from '../../molecules/FilterField';
import styles from './index.module.scss';

export type Props = {
	filter: {
		status?: string;
		search?: string;
	};
	handleFilterTodos: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
};
export const TodoFilter: React.FC<Props> = React.memo((props) => {
	const { filter, handleFilterTodos } = props;

	return (
		<div className={styles.root}>
			<div>
				<SearchInput value={filter.search} method={handleFilterTodos} />
			</div>
			<div>
				<FilterField value={filter.status} method={handleFilterTodos} />
			</div>
		</div>
	);
});
