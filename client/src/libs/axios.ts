import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';
import { TodoStatus } from '../redux/modules/todos';
import { loadToken } from './utils';

const { BASE_URL } = process.env;

type AuthType = 'signin' | 'signup';

export const getAuth = async (): Promise<AxiosResponse<any>> => {
	return axios.get(`${BASE_URL}/auth`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const signUser = async (
	userdata: { username: string; password: string },
	type: AuthType,
): Promise<AxiosResponse<any>> => {
	return axios.post(`${BASE_URL}/auth/${type}`, userdata);
};

export const getTodos = async (): Promise<AxiosResponse<any>> => {
	return axios.get(`${BASE_URL}/todos`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const filterTodos = async (key: {
	status?: string;
	search?: string;
}): Promise<AxiosResponse<any>> => {
	const queryObj: {
		status?: string;
		search?: string;
	} = {};

	if (key.status) queryObj.status = key.status;
	if (key.search) queryObj.search = key.search;

	const queryStr = queryString.stringify(queryObj);

	return axios.get(BASE_URL + '/todos' + (queryStr ? `?${queryStr}` : ''), {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const postTodo = (todo = {}): Promise<AxiosResponse<any>> => {
	return axios.post(`${BASE_URL}/todos`, todo, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};

export const patchTodo = (data: {
	id: number;
	status: TodoStatus;
}): Promise<AxiosResponse<any>> => {
	return axios.patch(
		`${BASE_URL}/todos/${data.id}/status`,
		{ status: data.status },
		{
			headers: { Authorization: `Bearer ${loadToken()}` },
		},
	);
};

export const deleteTodo = (id: number): Promise<AxiosResponse<any>> => {
	return axios.delete(`${BASE_URL}/todos/${id}`, {
		headers: { Authorization: `Bearer ${loadToken()}` },
	});
};
