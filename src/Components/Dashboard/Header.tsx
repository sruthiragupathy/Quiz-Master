import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className=' md:mx-8 font-semibold flex justify-between items-center px-6 py-4 border-b '>
			<Link to='/dashboard'>
				<div className='text-purple-700 font-pacifico text-2xl'>
					amaara quiz
				</div>
			</Link>
			<div>Hi Sruthi!</div>
		</nav>
	);
};
