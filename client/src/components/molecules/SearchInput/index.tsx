import React from 'react';
import { SearchField } from '../../atoms/SearchField';
import { InputLabel } from '../../atoms/InputLabel';

export type Props = {
	value?: string;
	method: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
export const SearchInput: React.FC<Props> = React.memo((props) => {
	const { value, method } = props;
	return (
		<>
			<InputLabel id="search_field" label="Search:" />
			<SearchField
				id="search_field"
				type="text"
				name="search"
				value={value}
				method={method}
			/>
		</>
	);
});
