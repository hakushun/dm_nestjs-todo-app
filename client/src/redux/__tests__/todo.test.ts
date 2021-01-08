/* eslint-disable no-undefined */
import reducer, { change, INITIAL_STATE, selectTodo } from '../modules/todo';

// reducer test
describe('Todo reducer test', () => {
	// initial state
	it('Todo initial state', () => {
		const result = reducer(undefined, {});
		expect(result).toEqual(INITIAL_STATE);
	});

	it('change title', () => {
		const result = reducer(
			undefined,
			change({ name: 'title', value: 'testtitle' }),
		);
		expect(result).toEqual({
			title: 'testtitle',
			detail: '',
		});
	});

	it('change detail', () => {
		const result = reducer(
			undefined,
			change({ name: 'detail', value: 'testdetail' }),
		);
		expect(result).toEqual({
			title: '',
			detail: 'testdetail',
		});
	});
});

// selector test
describe('Todo Selector', () => {
	const state = { ui: { todo: { title: 'title', detail: 'detail' } } };
	const result = { title: 'title', detail: 'detail' };
	expect(result).toEqual(selectTodo(state));
});
