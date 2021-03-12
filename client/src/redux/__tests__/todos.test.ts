/* eslint-disable no-undefined */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import steps from 'redux-effects-steps';
import reducer, {
	createTodo,
	createTodoActions,
	fetchTodos,
	fetchTodosActions,
	INITIAL_STATE,
	removeTodo,
	removeTodoActions,
	selectTodos,
	selectTodosLoading,
	Todo,
	TodoStatus,
	updateTodoStatus,
	updateTodoStatusActions,
} from '../modules/todos';
import { changeFilterActions } from '../modules/filter';
import * as module from '../../libs/axios';

const middlewares = [thunk, steps];
const mockStore = configureMockStore(middlewares);

const error = { code: '403', message: 'Forbbiden' };
const todos: Array<Todo> = [
	{ id: 1, title: 'title', detail: 'detail', status: TodoStatus.OPEN },
	{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
];
const todo: Todo = {
	id: 1,
	title: 'title',
	detail: 'detail',
	status: TodoStatus.OPEN,
};
const updateTodo: Todo = {
	id: 1,
	title: 'title',
	detail: 'detail',
	status: TodoStatus.DONE,
};
const createPayload = { title: 'title', detail: 'detail' };
const updatePayload = { id: 1, status: TodoStatus.DONE };
const deletePyload = { id: 1 };

describe('Async Actions', () => {
	it('fetchTodos: SUCCESS', async () => {
		jest.spyOn(module, 'getTodos').mockImplementationOnce(async () => {
			return Promise.resolve({ data: todos });
		});
		const expectedActions = [
			fetchTodosActions.started(null),
			fetchTodosActions.done({ params: null, result: todos }),
		];
		const store = mockStore({});
		await store.dispatch(fetchTodos());
		expect(store.getActions()).toEqual(expectedActions);
	});

	// it('fetchTodos: FAILED', async () => {
	// 	jest.spyOn(module, 'getTodos').mockImplementationOnce(async () => {
	// 		return Promise.reject(error);
	// 	});
	// 	const expectedActions = [
	// 		fetchTodosActions.started(null),
	// 		fetchTodosActions.failed({ params: null, error }),
	// 	];
	// 	const store = mockStore({});
	// 	await store.dispatch(fetchTodos());
	// 	expect(store.getActions()).toEqual(expectedActions);
	// });

	it('createTodo: SUCCESS', async () => {
		jest.spyOn(module, 'postTodo').mockImplementationOnce(async () => {
			return Promise.resolve({ data: todo });
		});
		const expectedActions = [
			createTodoActions.started(createPayload),
			createTodoActions.done({ params: createPayload, result: todo }),
		];
		const store = mockStore({});
		await store.dispatch(createTodo(createPayload));
		expect(store.getActions()).toEqual(expectedActions);
	});

	it('createTodo: FAILED', async () => {});

	it('updateTodoStatus: SUCCESS', async () => {
		jest.spyOn(module, 'patchTodo').mockImplementationOnce(async () => {
			return Promise.resolve({ data: updateTodo });
		});
		const expectedActions = [
			updateTodoStatusActions.started(updatePayload),
			updateTodoStatusActions.done({
				params: updatePayload,
				result: updateTodo,
			}),
		];
		const store = mockStore({});
		await store.dispatch(updateTodoStatus(updatePayload));
		expect(store.getActions()).toEqual(expectedActions);
	});

	it('updateTodoStatus: FAILED', async () => {});

	it('removeTodo: SUCCESS', async () => {
		jest.spyOn(module, 'deleteTodo').mockImplementationOnce(async () => {
			return Promise.resolve({ data: null });
		});
		const expectedActions = [
			removeTodoActions.started(deletePyload),
			removeTodoActions.done({ params: deletePyload, result: null }),
		];
		const store = mockStore({});
		await store.dispatch(removeTodo(deletePyload));
		expect(store.getActions()).toEqual(expectedActions);
	});

	it('removeTodo: FAILED', async () => {});
});

// reducer test
describe('Todos reducer test', () => {
	// initial state
	it('Todos initial state', () => {
		const result = reducer(undefined, {});
		expect(result).toEqual(INITIAL_STATE);
	});

	// fetchTodosActions
	it('fetch todos started', () => {
		const result = reducer(undefined, fetchTodosActions.started(null));
		expect(result).toEqual({
			todos: [],
			isLoading: true,
		});
	});
	it('fetch todos done', () => {
		const result = reducer(
			undefined,
			fetchTodosActions.done({ params: null, result: todos }),
		);
		expect(result).toEqual({
			todos: [
				{ id: 1, title: 'title', detail: 'detail', status: 'OPEN' },
				{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
			],
			isLoading: false,
		});
	});
	it('fetch todos failed', () => {
		const result = reducer(
			undefined,
			fetchTodosActions.failed({ params: null, error }),
		);
		expect(result).toEqual({
			todos: [],
			isLoading: false,
		});
	});

	// createTodoActions
	it('create todos started', () => {
		const result = reducer(undefined, createTodoActions.started(createPayload));
		expect(result).toEqual({
			todos: [],
			isLoading: true,
		});
	});
	it('create todos done', () => {
		const result = reducer(
			undefined,
			createTodoActions.done({ params: createPayload, result: todo }),
		);
		expect(result).toEqual({
			todos: [{ id: 1, title: 'title', detail: 'detail', status: 'OPEN' }],
			isLoading: false,
		});
	});
	it('create todos failed', () => {
		const result = reducer(
			undefined,
			createTodoActions.failed({ params: createPayload, error }),
		);
		expect(result).toEqual({
			todos: [],
			isLoading: false,
		});
	});

	// updateTodoStatusActions
	it('uptate todos started', () => {
		const result = reducer(
			{ todos, isLoading: false },
			updateTodoStatusActions.started(updatePayload),
		);
		expect(result).toEqual({
			todos,
			isLoading: true,
		});
	});

	it('uptate todos done', () => {
		const result = reducer(
			{ todos, isLoading: false },
			updateTodoStatusActions.done({
				params: updatePayload,
				result: updateTodo,
			}),
		);
		expect(result).toEqual({
			todos: [
				{ id: 1, title: 'title', detail: 'detail', status: 'DONE' },
				{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
			],
			isLoading: false,
		});
	});
	it('uptate todos failed', () => {
		const result = reducer(
			{ todos, isLoading: false },
			updateTodoStatusActions.failed({ params: updatePayload, error }),
		);
		expect(result).toEqual({
			todos,
			isLoading: false,
		});
	});

	// removeTodoActions
	it('remove todos started', () => {
		const result = reducer(
			{ todos, isLoading: false },
			removeTodoActions.started(deletePyload),
		);
		expect(result).toEqual({
			todos,
			isLoading: true,
		});
	});
	it('remove todos done', () => {
		const result = reducer(
			{ todos, isLoading: false },
			removeTodoActions.done({ params: deletePyload, result: null }),
		);
		expect(result).toEqual({
			todos: [
				{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
			],
			isLoading: false,
		});
	});
	it('remove todos failed', () => {
		const result = reducer(
			{ todos, isLoading: false },
			removeTodoActions.failed({ params: deletePyload, error }),
		);
		expect(result).toEqual({
			todos,
			isLoading: false,
		});
	});

	// changeFilterActions
	it('change search words done', () => {
		const result = reducer(
			{ todos, isLoading: false },
			changeFilterActions.done({
				params: { name: 'search', value: 'test' },
				result: [
					{
						id: 2,
						title: 'test',
						detail: 'filter',
						status: TodoStatus.DONE,
					},
				],
			}),
		);
		expect(result).toEqual({
			todos: [
				{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
			],
			isLoading: false,
		});
	});
	it('change search status done', () => {
		const result = reducer(
			{ todos, isLoading: false },
			changeFilterActions.done({
				params: { name: 'status', value: 'DONE' },
				result: [
					{
						id: 2,
						title: 'test',
						detail: 'filter',
						status: TodoStatus.DONE,
					},
				],
			}),
		);
		expect(result).toEqual({
			todos: [
				{ id: 2, title: 'test', detail: 'filter', status: TodoStatus.DONE },
			],
			isLoading: false,
		});
	});
});

// selector test
describe('Todos Selector', () => {
	it('selectTodos test', () => {
		const state = {
			resources: { todos: { todos } },
		};
		const result = todos;
		expect(result).toEqual(selectTodos(state));
	});

	it('selectTodosLoading test', () => {
		const state = {
			resources: { todos: { isLoading: false } },
		};
		const result = false;
		expect(result).toEqual(selectTodosLoading(state));
	});
});
