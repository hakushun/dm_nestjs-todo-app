import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducer';
import { authUserActions, signinActions, signupActions } from './user';
import {
	createTodoActions,
	fetchTodosActions,
	removeTodoActions,
	updateTodoStatusActions,
} from './todos';

const actionCreator = actionCreatorFactory();

export const toggle = actionCreator('TOGGLE_DIALOG');

const INITIAL_STATE: {
	isOpened: boolean;
	content: {
		message: string;
	};
} = {
	isOpened: false,
	content: {
		message: '',
	},
};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(toggle, (state) => ({
		...state,
		isOpened: !state.isOpened,
	}))
	.case(authUserActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(signupActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(signinActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(fetchTodosActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(createTodoActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(updateTodoStatusActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}))
	.case(removeTodoActions.failed, (state, { error }) => ({
		...state,
		isOpened: true,
		content: {
			message: error.message,
		},
	}));

export default reducer;

export const selectDialogIsOpened = createSelector(
	[(state: RootState) => state.ui.dialog.isOpened],
	(isOpened) => isOpened,
);

export const selectDialogContent = createSelector(
	[(state: RootState) => state.ui.dialog.content],
	(content) => content,
);
