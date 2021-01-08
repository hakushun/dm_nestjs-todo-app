import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { filterTodos } from '../../libs/axios';
import { RootState } from './reducer';
import { Todo } from './todos';

const actionCreator = actionCreatorFactory();

type ChangePayload = {
	name: string;
	value: string;
};
type Error = {
	code: string;
	message: string;
};

export const changeFilterActions = actionCreator.async<
	ChangePayload,
	Array<Todo>,
	Error
>('CHANGE_FILTER');

export const changeFilter = (body: ChangePayload): StepAction =>
	steps(
		changeFilterActions.started(body),
		() => filterTodos({ [body.name]: body.value }),
		[
			({ data }) => changeFilterActions.done({ params: body, result: data }),
			({ code, message }) =>
				changeFilterActions.failed({ params: body, error: { code, message } }),
		],
	);

export const INITIAL_STATE: {
	status?: string;
	search?: string;
} = {};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(changeFilterActions.started, (state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}))
	.case(changeFilterActions.done, (state) => state)
	.case(changeFilterActions.failed, (state) => state);

export default reducer;

export const selectFilter = createSelector(
	[(state: RootState) => state.ui.filter],
	(filter) => filter,
);
