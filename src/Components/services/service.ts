import axios, { AxiosError } from 'axios';
import { BACKEND } from '../../utils/api';

import { UserDetails } from './service.type';

const loginUser = async (user: UserDetails) => {
	try {
		const { data, status } = await axios.post(`${BACKEND}/login`, {
			email: user.email,
			password: user.password,
		});
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

const getLeaderBoard = async (quizDispatch: React.Dispatch<any>) => {
	const {
		data: { leaderboard },
		status,
	} = await axios({
		method: 'GET',
		url: `${BACKEND}/leaderboard`,
	});
	if (status === 200) {
		quizDispatch({
			type: 'SET_LEADERBOARD',
			payload: leaderboard,
		});
	}
};

export { loginUser, getLeaderBoard };
