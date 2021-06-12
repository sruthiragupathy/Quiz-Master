import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../context/authenticationContext';
import { signupFormValidation } from '../../utils/formValidation';

export const SignUp = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
	});

	const [formError, setFormError] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
	});

	const [error, setError] = useState();
	const { signUpNewUser } = useAuthentication();

	const onSignUpClicked = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();
		if (signupFormValidation({ user, setFormError })) {
			try {
				const response = await signUpNewUser({
					email: user.email,
					password: user.password,
					firstName: user.firstName,
					lastName: user.lastName,
					userName: user.userName,
				});
				if (response !== 'SUCCESS') {
					setError(response);
				}
			} catch (error) {
				console.log({ error });
			}
		}
	};

	const onUserChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<div className='flex justify-between min-h-screen'>
			<div className='hidden md:block w-1/3 bg-purple-100 min-h-screen flex flex-col items-start justify-center py-10 px-6 text-gray-600'>
				<div className='font-bold mb-4 text-lg italic'>Amaara Spaces</div>
				<div className='font-bold text-xl'>
					Play some awesome Quizzes and have fun
				</div>
			</div>
			<div className='flex flex-col items-start mx-4 justify-center w-full md:w-1/2 text-gray-500 my-2'>
				<h2 className='font-semibold text-2xl mb-2 '>
					Sign Up into Amaara Quizzes
				</h2>
				<form className='flex flex-col w-full items-start'>
					<div className='mb-2 text-red-600 font-semibold text-xl'>{error}</div>

					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>FirstName</label>
						<input
							placeholder='FirstName'
							type='text'
							value={user.firstName}
							name='firstName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.firstName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.firstName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>LastName</label>
						<input
							placeholder='Last Name'
							type='text'
							value={user.lastName}
							name='lastName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.lastName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.lastName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>Username</label>
						<input
							placeholder='Username'
							type='text'
							value={user.userName}
							name='userName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.userName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.userName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>Email Address</label>
						<input
							placeholder='Email Address'
							type='text'
							value={user.email}
							name='email'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.email && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.email}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
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
						type='submit'
						onClick={(e) => onSignUpClicked(e)}>
						SIGNUP
					</button>
					<div className='font-medium text-md'>
						Already a member?{' '}
						<NavLink
							to='/login'
							className='text-purple-700 underline font-bold'>
							Login
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};
