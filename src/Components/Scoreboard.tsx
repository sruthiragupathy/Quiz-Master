import { useQuiz } from '../context/quizContext';

export const Scoreboard = () => {
	const { quizState } = useQuiz();
	const getAttemptedPercentage = (): number => {
		const attemptedQuizArray = quizState.result.resultArray.filter(
			(result) => result.hasTaken,
		);
		return attemptedQuizArray.length;
	};
	const getRightAnswers = (): number => {
		const rightAnswers = quizState.result.resultArray.filter(
			(result) => result.correctOption === result.selectedOption,
		);
		return rightAnswers.length;
	};
	const getWrongAnswers = (): number => {
		const wrongAnswers = quizState.result.resultArray.filter(
			(result) => result.correctOption !== result.selectedOption,
		);
		return wrongAnswers.length;
	};
	return (
		<div className='h-screen relative'>
			<div className='h-3/5 bg-purple-600 w-full flex justify-center items-center rounded-b-3xl'>
				<div className='bg-purple-200 flex rounded-full h-40 w-40 items-center justify-center text-purple-800'>
					<div className='bg-gray-50 flex flex-col rounded-full h-28 w-28 items-center justify-center text-purple-800'>
						<span className='font-bold text-xs'>Your score</span>
						<span className='font-extrabold text-3xl'>
							{quizState.score} / 10
						</span>
					</div>
				</div>
			</div>
			<div className='absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 md:w-1/2 flex justify-between p-4 rounded-xl font-semibold shadow-2xl'>
				<div className='flex flex-col justify-between items-start'>
					<div className='flex flex-col items-start mb-3 text-purple-700'>
						<span>{getAttemptedPercentage()}</span>
						<span className='text-xs'>completion</span>
					</div>

					<div className='flex flex-col items-start text-green-600 '>
						<span>{getRightAnswers()}</span>
						<span className='text-xs'>Correct</span>
					</div>
				</div>
				<div className='flex flex-col justify-between items-start'>
					<div className='flex flex-col items-start mb-3 text-purple-700'>
						<span>{quizState.result.resultArray.length}</span>
						<span className='text-xs'>Total Questions</span>
					</div>
					<div className='flex flex-col items-start text-red-600'>
						<span>{getWrongAnswers()}</span>
						<span className='text-xs'>wrong</span>
					</div>
				</div>
			</div>
		</div>
	);
};
