import axios from 'axios';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND } from '../utils/api';
import {
	AuthContext,
	AuthInitialState,
	LoginUserDetails,
} from './authenticationContext.type';
import { authenticationReducer } from './authenticationReducer';

const authContext = createContext<AuthContext>({} as AuthContext);

export const AuthenticationProvider: React.FC = ({ children }) => {
	const localStorageDetails = localStorage.getItem('QuizLogin');
	const { username, token, firstName, userId } = localStorageDetails
		? JSON.parse(localStorageDetails)
		: { username: '', token: '', firstName: '', userId: '' };
	const initialState: AuthInitialState = {
		username,
		token,
		firstName,
		userId,
	};
	const navigate = useNavigate();
	const [authState, authDispatch] = useReducer(
		authenticationReducer,
		initialState,
	);
	const loginUserWithCredentials = async ({
		email,
		password,
		pathTo,
	}: LoginUserDetails) => {
		try {
			const { data, status } = await axios({
				method: 'POST',
				url: `${BACKEND}/login`,
				data: {
					email,
					password,
				},
			});
			if (status === 200) {
				await localStorage.setItem('QuizLogin', JSON.stringify(data));
				authDispatch({ type: 'SET_USER', payload: data });
				navigate(pathTo, { replace: true });
			}
			return '';
		} catch (error) {
			console.log({ error });
			return error?.response?.data?.error || 'Something went wrong';
		}
	};

	const logoutUser = () => {
		console.log('logout');
		localStorage.removeItem('QuizLogin');
		authDispatch({
			type: 'SET_USER',
			payload: { username: '', token: '', firstName: '', userId: '' },
		});
	};
	return (
		<authContext.Provider
			value={{ authState, authDispatch, loginUserWithCredentials, logoutUser }}>
			{children}
		</authContext.Provider>
	);
};

export const useAuthentication = () => useContext(authContext);
