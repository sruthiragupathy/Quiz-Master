import { NavLink } from 'react-router-dom';
import { useQuiz } from '../../context/quizContext';
import { Header } from './Header';
import { Scorecard } from './Scorecard';

export const ScoreTracker = () => {
	const {
		quizState: { currentUserScoreBoard },
	} = useQuiz();

	return (
		<div>
			<Header />
			<div className='mt-10 text-3xl font-extrabold'>My ScoreBoard</div>
			<div className='flex flex-col items-center justify-center'>
				{currentUserScoreBoard.length !== 0 ? (
					currentUserScoreBoard.map((quizRecord) => {
						return <Scorecard quizRecord={quizRecord} />;
					})
				) : (
					<div className='mt-20 font-semibold text-xl'>
						<span className='block mb-10'>
							"You haven't attempted any quiz yet"
						</span>
						<NavLink to={`/dashboard`}>
							<button className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none mb-8'>
								EXPLORE QUIZZES
							</button>
						</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};
