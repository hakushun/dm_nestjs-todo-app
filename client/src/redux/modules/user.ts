import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import Router from 'next/router';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { getAuth, signUser } from '../../libs/axios';
import { RootState } from './reducer';
import { removeToken } from '../../libs/utils';

const actionCreator = actionCreatorFactory();

type ChangePayload = {
	name: string;
	value: string;
};
type SignupPayload = {
	username: string;
	password: string;
};
type SigninPayload = {
	username: string;
	password: string;
};
export type AuthInfo = {
	accessToken: string;
	username: string;
};
type Error = {
	code: string;
	message: string;
};
type LogoutThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const change = actionCreator<ChangePayload>('CHANGE_SIGN');
export const authUserActions = actionCreator.async<
	null,
	{ username: string },
	Error
>('AUTH_USER');
export const authUser = (): StepAction =>
	steps(authUserActions.started(null), () => getAuth(), [
		({ data }) => authUserActions.done({ params: null, result: data }),
		({ code, message }) => {
			Router.push('/');
			return authUserActions.failed({ params: null, error: { code, message } });
		},
	]);
export const signupActions = actionCreator.async<
	SignupPayload,
	AuthInfo,
	Error
>('SIGNNUP_USER');
export const signup = (body: SignupPayload): StepAction =>
	steps(signupActions.started(body), () => signUser(body, 'signup'), [
		({ data }) => {
			Router.push('/todos');
			localStorage.setItem('accessToken', data.accessToken);
			return signupActions.done({ params: body, result: data.username });
		},
		({ code, message }) =>
			signupActions.failed({ params: body, error: { code, message } }),
	]);
export const signinActions = actionCreator.async<
	SigninPayload,
	AuthInfo,
	Error
>('SIGNNIN_USER');
export const signin = (body: SigninPayload): StepAction =>
	steps(signinActions.started(body), () => signUser(body, 'signin'), [
		({ data }) => {
			Router.push('/todos');
			localStorage.setItem('accessToken', data.accessToken);
			return signinActions.done({ params: body, result: data.username });
		},
		({ code, message }) =>
			signinActions.failed({ params: body, error: { code, message } }),
	]);
export const logoutUser = actionCreator('LOGOUT_USER');
export const logout = (): LogoutThunk => {
	return async (dispatch) => {
		Router.push('/');
		removeToken();
		dispatch(logoutUser());
	};
};
export const INITIAL_STATE: {
	form: {
		username: string;
		password: string;
	};
	userInfo: {
		username: string;
	};
	isLoading: boolean;
} = {
	form: {
		username: '',
		password: '',
	},
	userInfo: {
		username: '',
	},
	isLoading: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(change, (state, payload) => ({
		...state,
		form: {
			...state.form,
			[payload.name]: payload.value,
		},
	}))
	.case(authUserActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(authUserActions.done, (state, { result }) => ({
		...state,
		userInfo: {
			username: result.username,
		},
		isLoading: false,
	}))
	.case(authUserActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(signupActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(signupActions.done, (state, { result }) => ({
		...state,
		form: {
			username: '',
			password: '',
		},
		userInfo: {
			username: result.username,
		},
		isLoading: false,
	}))
	.case(signupActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(signinActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(signinActions.done, (state, { result }) => ({
		...state,
		form: {
			username: '',
			password: '',
		},
		userInfo: {
			username: result.username,
		},
		isLoading: false,
	}))
	.case(signinActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(logoutUser, () => ({ ...INITIAL_STATE }));

export default reducer;

export const selectUserSignForm = createSelector(
	[(state: RootState) => state.ui.user.form],
	(form) => form,
);

export const selectUserInfo = createSelector(
	[(state: RootState) => state.ui.user.userInfo],
	(userInfo) => userInfo,
);

export const selectUserLoading = createSelector(
	[(state: RootState) => state.ui.user.isLoading],
	(isLoading) => isLoading,
);
