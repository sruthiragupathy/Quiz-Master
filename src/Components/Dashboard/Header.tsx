import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import light_mode_black_24dp from '../../database/assets/light_mode_white_24dp.svg';
import dark_mode_black_24dp from '../../database/assets/dark_mode_black_24dp.svg';
export const Header = () => {
	const { theme, setTheme } = useTheme();

	return (
		<nav className=' md:mx-8 flex justify-between items-center px-6 py-4 border-b '>
			<Link to='/dashboard' className=''>
				<div className='text-purple-700 dark:text-purple-600 italic font-black text-lg'>
					Amaara Quiz
				</div>
			</Link>

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
		</nav>
	);
};
