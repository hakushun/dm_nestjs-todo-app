export const saveToken = (token: string): void => {
	localStorage.setItem('accessToken', token);
};

export const loadToken = (): string | null => {
	const token = localStorage.getItem('accessToken');
	return token;
};

export const removeToken = (): void => {
	localStorage.removeItem('accessToken');
};
