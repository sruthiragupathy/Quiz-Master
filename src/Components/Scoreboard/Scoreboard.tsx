import { useQuiz } from '../../context/quizContext';
import { CheckAnswers } from './CheckAnswers';
import { Header } from '../Dashboard/Header';
import {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
} from '../../utils/utils';
import { Navigate } from 'react-router';
export const Scoreboard = () => {
	const { quizState } = useQuiz();
	return quizState.currentQuiz ? (
		<div className='relative'>
			<Header />
			<div className='h-80 bg-purple-600 w-full flex justify-center items-center rounded-b-3xl'>
				<div className='bg-purple-200 flex rounded-full h-40 w-40 items-center justify-center text-purple-800'>
					<div className='bg-gray-50 flex flex-col rounded-full h-28 w-28 items-center justify-center text-purple-800'>
						<span className='font-bold text-xs'>Your score</span>
						<span className='font-extrabold text-3xl'>
							{quizState.score} / {getTotalScore(quizState?.currentQuiz)}
						</span>
					</div>
				</div>
			</div>
			<div className='absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 w-4/5 md:w-1/2 flex justify-between p-4 rounded-xl font-semibold shadow-2xl transition duration-500 ease-in-out'>
				<div className='flex flex-col justify-between items-start'>
					<div className='flex flex-col items-start mb-3 text-purple-600'>
						<span>{getAttemptedPercentage(quizState.result.resultArray)}</span>
						<span className='text-xs'>Attempted</span>
					</div>

					<div className='flex flex-col items-start text-green-600 '>
						<span>{getRightAnswers(quizState.result.resultArray)}</span>
						<span className='text-xs'>Correct</span>
					</div>
				</div>
				<div className='flex flex-col justify-between items-start'>
					<div className='flex flex-col items-start mb-3 text-purple-700'>
						<span>{quizState.result.resultArray.length}</span>
						<span className='text-xs'>Total Questions</span>
					</div>
					<div className='flex flex-col items-start text-red-600'>
						<span>{getWrongAnswers(quizState.result.resultArray)}</span>
						<span className='text-xs'>wrong</span>
					</div>
				</div>
			</div>
			<CheckAnswers />
		</div>
	) : (
		<Navigate to='/dashboard'></Navigate>
	);
};
