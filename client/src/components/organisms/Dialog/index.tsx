import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectDialogIsOpened,
	selectDialogContent,
	toggle,
} from '../../../redux/modules/dialog';
import { Dialog as Presentational } from './Dialog';

export const Dialog: React.VFC = () => {
	const dispatch = useDispatch();
	const dialogIsOpened = useSelector(selectDialogIsOpened);
	const dialogContent = useSelector(selectDialogContent);

	const closeDialog = () => {
		dispatch(toggle());
	};
	return (
		<>
			{dialogIsOpened && (
				<Presentational content={dialogContent} closeDialog={closeDialog} />
			)}
		</>
	);
};
