import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUserInfo } from '../../../redux/modules/user';
import { Header as Presentational } from './Header';

export const Header: React.FC = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector(selectUserInfo);

	const handleLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	return <Presentational userInfo={userInfo} handleLogout={handleLogout} />;
};
