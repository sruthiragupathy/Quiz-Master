import { Link } from 'react-router-dom';
import { Header } from '../Dashboard/Header';
import quiz_illustrator from '../../database/assets/undraw_Questions_re_1fy7.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Home = () => {
	return (
		<div>
			<Header />
			<div className='flex justify-evenly items-center mx-2 my-4 flex-wrap'>
				<div className='md:w-1/2 w-full'>
					<img src={quiz_illustrator} alt='' className='w-full h-1/2' />
				</div>
				<div className='mt-4'>
					<div className='text-2xl font-bold text-purple-600 mb-4'>
						Welcome to Amaara Quiz
					</div>
					<div className='text-xl font-semibold mb-4'>
						Are you interested in Fashion ?
					</div>
					<div className='text-xl font-semibold mb-6'>
						Participate in the quizzes handpicked for you
					</div>
					<Link to={`/dashboard`}>
						<button className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none mb-8'>
							EXPLORE QUIZZES
						</button>
					</Link>
					<div className='flex justify-evenly text-gray-400'>
						<a
							href='https://github.com/sruthiragupathy'
							target='_blank'
							rel='noreferrer'>
							<GitHubIcon color='inherit'></GitHubIcon>
						</a>
						<a
							href='https://twitter.com/CodesSruthi'
							target='_blank'
							rel='noreferrer'>
							<TwitterIcon color='inherit'></TwitterIcon>
						</a>
						<a
							href='https://www.linkedin.com/in/sruthi-ragupathy-7740ab172/'
							target='_blank'
							rel='noreferrer'>
							<LinkedInIcon color='inherit'></LinkedInIcon>
						</a>
						<a
							href='https://www.instagram.com/sruthi_codes/'
							target='_blank'
							rel='noreferrer'>
							<InstagramIcon color='inherit'></InstagramIcon>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
