import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducer';
import { createTodoActions } from './todos';

const actionCreator = actionCreatorFactory();

type ChangePayload = {
	name: string;
	value: string;
};

export const change = actionCreator<ChangePayload>('CHANGE_TODO');

export const INITIAL_STATE = {
	title: '',
	detail: '',
};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(change, (state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}))
	.case(createTodoActions.done, () => ({ ...INITIAL_STATE }));

export default reducer;

export const selectTodo = createSelector(
	[(state: RootState) => state.ui.todo],
	(todo) => todo,
);
