import { useQuiz } from '../context/quizContext';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export const CheckAnswers = () => {
	const {
		quizState: { result, currentQuiz },
	} = useQuiz();

	const isOptionSelected = (optionId: string, quizId: string) => {
		const currentQuiz = result.resultArray.find(
			(result) => result.id === quizId,
		);
		if (currentQuiz?.selectedOption === optionId) {
			return true;
		}
		return false;
	};

	const isRightAnswer = (optionId: string, quizId: string): boolean => {
		const currentQuiz = result.resultArray.find(
			(result) => result.id === quizId,
		);
		return currentQuiz?.correctOption === optionId;
	};

	const styleRightAndWrongAnswers = (optionId: string, quizId: string) => {
		if (isOptionSelected(optionId, quizId) && isRightAnswer(optionId, quizId)) {
			return 'bg-green-500 text-gray-50 hover:bg-green-600';
		}
		if (
			isOptionSelected(optionId, quizId) &&
			!isRightAnswer(optionId, quizId)
		) {
			return 'bg-red-500 text-gray-50 hover:bg-red-600';
		}
		if (isRightAnswer(optionId, quizId)) {
			return 'bg-green-500 text-gray-50 hover:bg-green-600';
		}
		return '';
	};

	return (
		<div className='mt-24 flex flex-col justify-center items-center my-auto'>
			<div className='text-2xl font-semibold mb-6'>Check Answers</div>
			<div className='md:w-3/5 '>
				{currentQuiz?.questions.map((quiz, index) => {
					return (
						<div className='flex flex-col justify-center items-center px-1 '>
							<div className='text-lg font-semibold mb-4 md: w-4/5 md:text-left'>
								{index + 1}. {quiz.question}
							</div>
							<div className='flex flex-col w-4/5 mb-4'>
								{quiz.options.map((option) => {
									return (
										<div
											className={`bg-gray-100 px-4 py-2 rounded-lg mb-4 text-left  ${
												styleRightAndWrongAnswers(option.id, quiz.id)
													? styleRightAndWrongAnswers(option.id, quiz.id)
													: 'dark:bg-gray-700'
											}`}>
											{isOptionSelected(option.id, quiz.id) ? (
												isRightAnswer(option.id, quiz.id) ? (
													<div className='flex justify-between items-center'>
														<span>{option.text}</span>
														<CheckCircleIcon />
													</div>
												) : (
													<div className='flex justify-between items-center'>
														<span>{option.text}</span>
														<CancelIcon />
													</div>
												)
											) : (
												option.text
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
