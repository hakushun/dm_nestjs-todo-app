import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import { actionCreatorFactory } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { deleteTodo, getTodos, patchTodo, postTodo } from '../../libs/axios';
import { changeFilterActions } from './filter';
import { RootState } from './reducer';
import { logoutUser } from './user';

const actionCreator = actionCreatorFactory();

export enum TodoStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE',
}
export interface Todo {
	id: number;
	title: string;
	detail: string;
	status: TodoStatus;
}
type CreatePayload = {
	title: string;
	detail: string;
};
type UpdatePayload = {
	id: number;
	status: TodoStatus;
};
type DeletePayload = {
	id: number;
};
type Error = {
	code: string;
	message: string;
};

export const fetchTodosActions = actionCreator.async<null, Array<Todo>, Error>(
	'FETCH_TODOS',
);
export const createTodoActions = actionCreator.async<
	CreatePayload,
	Todo,
	Error
>('CREATE_TODO');
export const updateTodoStatusActions = actionCreator.async<
	UpdatePayload,
	Todo,
	Error
>('UPDATE_STATUS');
export const removeTodoActions = actionCreator.async<
	DeletePayload,
	null,
	Error
>('DELETE_TODO');

export const fetchTodos = (): StepAction =>
	steps(fetchTodosActions.started(null), () => getTodos(), [
		({ data }) => fetchTodosActions.done({ params: null, result: data }),
		({ code, message }) =>
			fetchTodosActions.failed({
				params: null,
				error: { code, message },
			}),
	]);
export const createTodo = (body: CreatePayload): StepAction =>
	steps(createTodoActions.started(body), () => postTodo(body), [
		({ data }) => createTodoActions.done({ params: body, result: data }),
		({ code, message }) =>
			createTodoActions.failed({
				params: body,
				error: { code, message },
			}),
	]);
export const updateTodoStatus = (body: UpdatePayload): StepAction =>
	steps(updateTodoStatusActions.started(body), () => patchTodo(body), [
		({ data }) => updateTodoStatusActions.done({ params: body, result: data }),
		({ code, message }) =>
			updateTodoStatusActions.failed({
				params: body,
				error: { code, message },
			}),
	]);
export const removeTodo = (body: DeletePayload): StepAction =>
	steps(removeTodoActions.started(body), () => deleteTodo(body.id), [
		() => removeTodoActions.done({ params: body, result: null }),
		({ code, message }) =>
			removeTodoActions.failed({
				params: body,
				error: { code, message },
			}),
	]);

export const INITIAL_STATE: {
	todos: Array<Todo>;
	isLoading: boolean;
} = {
	todos: [],
	isLoading: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(fetchTodosActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(fetchTodosActions.done, (state, { result }) => ({
		...state,
		todos: [...result],
		isLoading: false,
	}))
	.case(fetchTodosActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(changeFilterActions.done, (state, { result }) => ({
		...state,
		todos: [...result],
		isLoading: false,
	}))
	.case(createTodoActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(createTodoActions.done, (state, { result }) => ({
		...state,
		todos: [...state.todos, result],
		isLoading: false,
	}))
	.case(createTodoActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(updateTodoStatusActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(updateTodoStatusActions.done, (state, { result }) => ({
		...state,
		todos: [
			...state.todos.map((todo) => {
				if (todo.id === result.id) return result;
				return todo;
			}),
		],
		isLoading: false,
	}))
	.case(updateTodoStatusActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(removeTodoActions.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(removeTodoActions.done, (state, { params }) => ({
		...state,
		todos: [...state.todos.filter((todo) => todo.id !== params.id)],
		isLoading: false,
	}))
	.case(removeTodoActions.failed, (state) => ({
		...state,
		isLoading: false,
	}))
	.case(logoutUser, () => ({ ...INITIAL_STATE }));

export default reducer;

export const selectTodos = createSelector(
	[(state: RootState) => state.resources.todos.todos],
	(todos) => todos,
);

export const selectTodosLoading = createSelector(
	[(state: RootState) => state.resources.todos.isLoading],
	(isLoading) => isLoading,
);
