import React from 'react';
import { InputLabel } from '../../atoms/InputLabel';
import { FilterSelect } from '../../atoms/FilterSelect';

export type Props = {
	value?: string;
	method: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
export const FilterField: React.FC<Props> = React.memo((props) => {
	const { value, method } = props;
	return (
		<>
			<InputLabel id="status_filter" label="Filter:" />
			<FilterSelect
				id="status_filter"
				name="status"
				value={value}
				method={method}
			/>
		</>
	);
});
