import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/atoms/Loading';
import { authUser, selectUserLoading } from '../redux/modules/user';

export const withAuth = (Component: React.FC): React.FC => {
	return (props) => {
		const dispatch = useDispatch();
		const isLoading = useSelector(selectUserLoading);

		useEffect(() => {
			dispatch(authUser());
		}, []);
		return <>{isLoading ? <Loading /> : <Component {...props} />}</>;
	};
};
