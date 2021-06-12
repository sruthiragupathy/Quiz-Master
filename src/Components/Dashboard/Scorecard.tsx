import { useEffect } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../context/authenticationContext';
import { useQuiz } from '../../context/quizContext';
import { ScoreBoard } from '../../context/quizContext.type';
import { getTotalScore } from '../../utils/utils';

export const Scorecard = ({ quizRecord }: { quizRecord: ScoreBoard }) => {
	const { _id, quizId, score, numberOfAttempts } = quizRecord;
	const {
		authState: { token },
	} = useAuthentication();
	const { quizDispatch } = useQuiz();
	const takeQuiz = (quizId: string) => {
		quizDispatch({
			type: 'UPDATE_QUIZID',
			payload: quizId,
		});
		quizDispatch({
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		});
	};
	const navigate = useNavigate();

	useEffect(() => {
		!token && navigate('/');
	}, [token]);
	return (
		<div className='text-left w-full md:w-4/6 border-2 border-purple-600 rounded-md flex justify-between p-4 mt-10'>
			<div key={_id} className='min-h-24 flex flex-col justify-between'>
				<h2 className='text-2xl font-bold mb-2'>{quizId.genre}</h2>
				<div className='mb-3'>
					<span className='bg-green-600 text-white font-semibold p-1'>
						Score
					</span>{' '}
					: <span className='text-lg font-semibold'>{score}</span> /{' '}
					{getTotalScore(quizId)}
				</div>
				<div className='mb-3'>
					<span className='bg-green-600 text-white font-semibold p-1'>
						Number of Attempts
					</span>{' '}
					: <span className='text-lg font-semibold'>{numberOfAttempts}</span>
				</div>
			</div>
			<NavLink to={`/quiz/${quizRecord.quizId._id}`}>
				<button
					className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none'
					onClick={() => takeQuiz(quizRecord.quizId._id)}>
					RETAKE QUIZ
				</button>
			</NavLink>
		</div>
	);
};
