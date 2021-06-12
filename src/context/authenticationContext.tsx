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
	SignUpUserDetails,
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
			return 'SUCCESS';
		} catch (error) {
			console.log({ error });
			return error?.response?.data?.error || 'Something went wrong';
		}
	};

	const signUpNewUser = async ({
		email,
		password,
		firstName,
		lastName,
		userName,
	}: SignUpUserDetails) => {
		try {
			const { data, status } = await axios({
				method: 'POST',
				url: `${BACKEND}/signup`,
				data: {
					email,
					password,
					firstName,
					lastName,
					userName,
				},
			});
			console.log({ data, status });
			if (status === 200) {
				await localStorage.setItem(
					'QuizLogin',
					JSON.stringify({
						token: data.token,
						username: data.userName,
						userId: data.userId,
						firstName: data.firstName,
					}),
				);
				authDispatch({ type: 'SET_USER', payload: data });
				navigate('/', { replace: true });
			}
			return 'SUCCESS';
		} catch (error) {
			console.log({ error });
			return error?.response?.data?.error || 'Something went wrong';
		}
	};

	const logoutUser = () => {
		localStorage.removeItem('QuizLogin');
		authDispatch({
			type: 'SET_USER',
			payload: { username: '', token: '', firstName: '', userId: '' },
		});
	};
	return (
		<authContext.Provider
			value={{
				authState,
				authDispatch,
				loginUserWithCredentials,
				logoutUser,
				signUpNewUser,
			}}>
			{children}
		</authContext.Provider>
	);
};

export const useAuthentication = () => useContext(authContext);
