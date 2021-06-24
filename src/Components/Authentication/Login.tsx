import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../context/authenticationContext';
import { formValidation } from '../../utils/formValidation';

export const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [formError, setFormError] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const location = useLocation();
	const state = (location.state as { from: string }) || null;
	const {
		loginUserWithCredentials,
		authState: { token },
	} = useAuthentication();

	const onUserChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const navigate = useNavigate();
	useEffect(() => {
		token && navigate('/');
	}, []);
	const onLoginClicked = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formValidation({ user, setFormError })) {
			try {
				const response = await loginUserWithCredentials({
					email: user.email,
					password: user.password,
					pathTo: state?.from ? state?.from : '/',
				});
				if (response !== 'SUCCESS') {
					setError(response);
				}
			} catch (error) {
				console.log({ error });
			}
		}
	};

	return (
		<div className='flex justify-between min-h-screen'>
			<div className='hidden md:block w-1/3 bg-purple-100 h-screen flex flex-col items-start justify-center py-10 px-6 text-gray-600'>
				<div className='font-bold mb-6 text-lg italic'>Amaara Spaces</div>
				<div className='font-bold text-xl'>Have fun playing Quizzes</div>
			</div>
			<div className='flex flex-col items-start mx-4 justify-center w-full md:w-1/2 text-gray-500 dark:text-gray-50'>
				<h2 className='font-semibold text-2xl mb-6 '>
					Sign in to Amaara Quizzes
				</h2>
				<form
					className='flex flex-col w-full items-start text-left dark:text-gray-50'
					onSubmit={(e) => onLoginClicked(e)}>
					<div className='mb-6 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>Email Address</label>
						<input
							placeholder='Email Address'
							type='text'
							value={user.email}
							name='email'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full text-gray-700
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.email && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.email}
							</span>
						)}
					</div>
					<div className='mb-6 md:w-9/12 w-full text-gray-700'>
						<label className='mb-2 font-semibold block font-sm'>Password</label>

						<input
							placeholder='Password'
							type='password'
							value={user.password}
							name='password'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.password && (
							<span className='block font-semibold text-red-600'>
								*{formError.password}
							</span>
						)}
					</div>
					<button
						className='bg-purple-700 hover:bg-purple-800 p-2 md:w-9/12 w-full text-white font-semibold mb-2'
						type='submit'>
						LOGIN
					</button>
					<div className='font-medium text-md'>
						Not a member?{' '}
						<NavLink
							to='/signup'
							className='text-purple-700 underline font-bold'>
							Sign Up
						</NavLink>
					</div>
					<div className='mt-2 text-red-600 font-semibold text-lg'>{error}</div>
				</form>
			</div>
		</div>
	);
};
