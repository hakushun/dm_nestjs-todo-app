/* eslint-disable no-undefined */
import reducer, {
	changeFilterActions,
	INITIAL_STATE,
	selectFilter,
} from '../modules/filter';

// reducer test
describe('Filter reducer test', () => {
	const error = { code: '403', message: 'Forbbiden' };

	// initial state
	it('Filter initial state', () => {
		const result = reducer(undefined, {});
		expect(result).toEqual(INITIAL_STATE);
	});

	// changeFilterActions
	it('change search words started', () => {
		const result = reducer(
			undefined,
			changeFilterActions.started({ name: 'search', value: 'search' }),
		);
		expect(result).toEqual({
			search: 'search',
		});
	});
	it('change search words done', () => {
		const result = reducer(
			{ search: 'search' },
			changeFilterActions.done({
				params: { name: 'search', value: 'search' },
				result: [],
			}),
		);
		expect(result).toEqual({
			search: 'search',
		});
	});
	it('change search words failed', () => {
		const result = reducer(
			{ search: 'search' },
			changeFilterActions.failed({
				params: { name: 'search', value: 'search' },
				error,
			}),
		);
		expect(result).toEqual({
			search: 'search',
		});
	});

	it('change search status started', () => {
		const result = reducer(
			undefined,
			changeFilterActions.started({ name: 'status', value: 'DONE' }),
		);
		expect(result).toEqual({
			status: 'DONE',
		});
	});
	it('change search status done', () => {
		const result = reducer(
			{ status: 'DONE' },
			changeFilterActions.done({
				params: { name: 'status', value: 'DONE' },
				result: [],
			}),
		);
		expect(result).toEqual({
			status: 'DONE',
		});
	});
	it('change search status failed', () => {
		const result = reducer(
			{ status: 'DONE' },
			changeFilterActions.failed({
				params: { name: 'status', value: 'DONE' },
				error,
			}),
		);
		expect(result).toEqual({
			status: 'DONE',
		});
	});
});

// selector test
describe('Todo Selector', () => {
	const state = { ui: { filter: { search: 'search', status: 'OPEN' } } };
	const result = { search: 'search', status: 'OPEN' };
	expect(result).toEqual(selectFilter(state));
});
