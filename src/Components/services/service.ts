import axios, { AxiosError } from 'axios';
import { BACKEND } from '../../utils/api';

import {
	UserDetails,
	AuthenticationResponse,
	ErrorResponse,
} from './service.type';

const loginUser = async (user: UserDetails) => {
	try {
		const { data, status } = await axios.post(`${BACKEND}/login`, {
			email: user.email,
			password: user.password,
		});
		console.log({ data, status });
		if (status === 200) {
			localStorage.setItem('quizLogin', JSON.stringify(data));
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError;
			return serverError;
		}
		return { error: 'something went wrong' };
	}
};

export { loginUser };
