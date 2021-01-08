/* eslint-disable no-undefined */
import reducer, {
	authUserActions,
	signupActions,
	change,
	logoutUser,
	signinActions,
	INITIAL_STATE,
	selectUserSignForm,
	selectUserInfo,
	selectUserLoading,
} from '../modules/user';

describe('User reducer test', () => {
	const error = { code: '403', message: 'Forbbiden' };
	const user = { username: 'testuser', password: '!Passw0rd' };
	const accessToken = 'token';

	// initial state
	it('User initial state', () => {
		const result = reducer(undefined, {});
		expect(result).toEqual(INITIAL_STATE);
	});

	it('change username', () => {
		const result = reducer(
			undefined,
			change({ name: 'username', value: 'testuser' }),
		);
		expect(result).toEqual({
			form: {
				username: 'testuser',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});
	it('change password', () => {
		const result = reducer(
			undefined,
			change({ name: 'password', value: '!Passw0rd' }),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '!Passw0rd',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});

	// authUserActions
	it('authentication user started', () => {
		const result = reducer(undefined, authUserActions.started(null));
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: true,
		});
	});
	it('authentication user done', () => {
		const result = reducer(
			undefined,
			authUserActions.done({ params: null, result: { username: 'testuser' } }),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: 'testuser',
			},
			isLoading: false,
		});
	});
	it('authentication user failed', () => {
		const result = reducer(
			undefined,
			authUserActions.failed({ params: null, error }),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});

	// signupActions
	it('signup user started', () => {
		const result = reducer(undefined, signupActions.started(user));
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: true,
		});
	});
	it('signup user done', () => {
		const result = reducer(
			undefined,
			signupActions.done({
				params: user,
				result: { username: 'testuser', accessToken },
			}),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: 'testuser',
			},
			isLoading: false,
		});
	});
	it('signup user failed', () => {
		const error = { code: '403', message: 'Forbbiden' };
		const result = reducer(
			undefined,
			signupActions.failed({ params: user, error }),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});

	// signinActions
	it('signin user started', () => {
		const result = reducer(undefined, signinActions.started(user));
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: true,
		});
	});
	it('signin user done', () => {
		const result = reducer(
			undefined,
			signinActions.done({
				params: user,
				result: { username: 'testuser', accessToken },
			}),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: 'testuser',
			},
			isLoading: false,
		});
	});
	it('signin user failed', () => {
		const error = { code: '403', message: 'Forbbiden' };
		const result = reducer(
			undefined,
			signinActions.failed({ params: user, error }),
		);
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});

	// logoutUser
	it('logout user', () => {
		const result = reducer(undefined, logoutUser());
		expect(result).toEqual({
			form: {
				username: '',
				password: '',
			},
			userInfo: {
				username: '',
			},
			isLoading: false,
		});
	});
});

// selector test
describe('User Selector', () => {
	it('selectUserSignForm test', () => {
		const state = {
			ui: { user: { form: { username: 'username', password: 'password' } } },
		};
		const result = { username: 'username', password: 'password' };
		expect(result).toEqual(selectUserSignForm(state));
	});

	it('selectUserInfo test', () => {
		const state = {
			ui: { user: { userInfo: { username: 'username' } } },
		};
		const result = { username: 'username' };
		expect(result).toEqual(selectUserInfo(state));
	});

	it('selectUserLoading test', () => {
		const state = {
			ui: { user: { isLoading: false } },
		};
		const result = false;
		expect(result).toEqual(selectUserLoading(state));
	});
});
