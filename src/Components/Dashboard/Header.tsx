import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import light_mode_black_24dp from '../../database/assets/light_mode_white_24dp.svg';
import dark_mode_black_24dp from '../../database/assets/dark_mode_black_24dp.svg';
import { useAuthentication } from '../../context/authenticationContext';
import { ExitToApp } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';

export const Header = () => {
	const { theme, setTheme } = useTheme();
	const {
		authState: { token, firstName, username },
		logoutUser,
	} = useAuthentication();

	return (
		<nav className=' md:mx-8 flex justify-between items-center px-6 py-4 border-b '>
			<NavLink to='/login' className=''>
				<div className='text-purple-700 dark:text-purple-600 italic font-black text-md'>
					Amaara Quiz
				</div>
			</NavLink>
			<div className='flex'>
				{token ? (
					<div className='flex items-center'>
						<div className='font-semibold text-purple-600 text-md mr-6'>
							Hi {firstName}
						</div>
						<NavLink
							to={`/profile/${username}`}
							activeClassName='text-purple-600'
							className='text-gray-700'>
							<div className='mr-6  dark:text-gray-50' title='profile'>
								<PersonIcon color='inherit' />
							</div>
						</NavLink>
						<button
							className='mr-6 text-gray-700 dark:text-gray-50'
							title='signout'
							onClick={logoutUser}>
							<ExitToApp color='inherit' />
						</button>
					</div>
				) : (
					<NavLink
						to='/login'
						className='font-semibold text-purple-600 text-lg mr-8'>
						LOGIN
					</NavLink>
				)}

				<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
					{theme === 'light' ? (
						<img
							src={dark_mode_black_24dp}
							alt='dark mode'
							className='text-gray-800'
						/>
					) : (
						<img src={light_mode_black_24dp} alt='light mode' />
					)}
				</button>
			</div>
		</nav>
	);
};
