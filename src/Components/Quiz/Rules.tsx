import { useQuiz } from '../../context/quizContext';

export const Rules = ({
	setStart,
}: {
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { quizDispatch } = useQuiz();
	const startQuiz = () => {
		setStart((start) => !start);
		quizDispatch({
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		});
	};
	return (
		<div className='min-h-screen w-full flex items-center justify-center'>
			<div className='border-2 border-purple-600 p-4 flex flex-col items-start justify-evenly md:w-1/2 md:px-32 '>
				<div className='font-extrabold text-2xl self-center mb-4'>Rules</div>
				<div className='mb-3'>This Quiz consists of 2 questions.</div>
				<div className='mb-3'>Each right answer carries 2 points</div>
				<div className='mb-3'>Each wrong answer has negative mark of -1</div>
				<div className='mb-3'>All the best!!</div>
				<button
					className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none self-center'
					onClick={() => startQuiz()}>
					START QUIZ
				</button>
			</div>
		</div>
	);
};
