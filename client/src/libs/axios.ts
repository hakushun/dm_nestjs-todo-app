import axios from 'axios';
import queryString from 'query-string';
import { Todo, TodoStatus } from '../redux/modules/todos';
import { AuthInfo } from '../redux/modules/user';
import { loadToken } from './utils';

const { BASE_URL } = process.env;
const instance = axios.create({
	withCredentials: true,
	headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

type AuthType = 'signin' | 'signup';

export const getAuth = async (): Promise<{ data: { username: string } }> => {
	return instance.get(`${BASE_URL}/auth`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const signUser = async (
	userdata: { username: string; password: string },
	type: AuthType,
): Promise<{ data: AuthInfo }> => {
	return instance.post(`${BASE_URL}/auth/${type}`, userdata);
};

export const getTodos = async (): Promise<{ data: Todo[] }> => {
	return instance.get(`${BASE_URL}/todos`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const filterTodos = async (key: {
	status?: string;
	search?: string;
}): Promise<{ data: Todo[] }> => {
	const queryObj: {
		status?: string;
		search?: string;
	} = {};

	if (key.status) queryObj.status = key.status;
	if (key.search) queryObj.search = key.search;

	const queryStr = queryString.stringify(queryObj);

	return instance.get(BASE_URL + '/todos' + (queryStr ? `?${queryStr}` : ''), {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const postTodo = (todo = {}): Promise<{ data: Todo }> => {
	return instance.post(`${BASE_URL}/todos`, todo, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const patchTodo = (data: {
	id: number;
	status: TodoStatus;
}): Promise<{ data: Todo }> => {
	return instance.patch(
		`${BASE_URL}/todos/${data.id}/status`,
		{ status: data.status },
		{
			headers: { Authorization: `Bearer ${loadToken()}` },
		},
	);
};

export const deleteTodo = (id: number): Promise<{ data: null }> => {
	return instance.delete(`${BASE_URL}/todos/${id}`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};
