import { useQuiz } from '../../context/quizContext';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import {
	styleRightAndWrongAnswers,
	isOptionSelected,
	isRightAnswer,
} from '../../utils/utils';

export const CheckAnswers = () => {
	const {
		quizState: { result, currentQuiz },
	} = useQuiz();

	return (
		<div className='mt-24 flex flex-col justify-center items-center my-auto'>
			<div className='text-2xl font-semibold mb-6'>Check Answers</div>
			<div className='md:w-3/5 '>
				{currentQuiz?.questions.map((quiz, index) => {
					return (
						<div
							className='flex flex-col justify-center items-center px-1'
							key={index}>
							<div className='text-lg font-semibold mb-4 md: w-4/5 md:text-left'>
								{index + 1}. {quiz.question}
							</div>
							<div className='flex flex-col w-4/5 mb-4'>
								{quiz.options.map((option) => {
									return (
										<div
											className={`bg-gray-100 px-4 py-2 rounded-lg mb-4 text-left  ${
												styleRightAndWrongAnswers(
													result.resultArray,
													option.id,
													quiz.id,
												)
													? styleRightAndWrongAnswers(
															result.resultArray,
															option.id,
															quiz.id,
													  )
													: 'dark:bg-gray-700'
											}`}>
											{isOptionSelected(
												result.resultArray,
												option.id,
												quiz.id,
											) ? (
												isRightAnswer(
													result.resultArray,
													option.id,
													quiz.id,
												) ? (
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
