import { useState } from 'react';
import { useQuiz } from '../context/quizContext';
import { Questions } from '../database/database.type';
import { Object } from '../database/database.type';

type Prop = {
	currentQuiz: Object;
};

export const CurrentQuestion = ({ currentQuiz }: Prop) => {
	const { quizState, quizDispatch } = useQuiz();
	const [disableButtons, setDisableButtons] = useState<boolean>(false);
	const [optionId, setOptionId] = useState<string>('');
	const nextQuestion = () => {
		if (currentQuiz) {
			quizState.currentQuestionNumber === currentQuiz.questions.length - 1
				? quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER', payload: -1 })
				: quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
		}
		setDisableButtons(false);
	};
	const isRightAnswer = (isRight: boolean, selectedOption: string) => {
		if (isRight) {
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload: currentQuiz?.questions[quizState.currentQuestionNumber].points,
			});
		} else {
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload:
					currentQuiz?.questions[quizState.currentQuestionNumber]
						.negativePoints,
			});
		}
		setOptionId(selectedOption);
		setDisableButtons((disableButtons) => !disableButtons);
	};
	const styleRightAndWrongAnswers = (
		isRight: boolean,
		selectedButtonId: string,
	): string => {
		if (isRight && selectedButtonId === optionId) {
			return 'bg-green-500 text-gray-50 hover:bg-green-600';
		}
		if (!isRight && selectedButtonId === optionId) {
			return 'bg-red-500 text-gray-50 hover:bg-red-600';
		}
		return '';
	};
	return (
		<div className='max-w-full flex justify-center items-center h-full'>
			<div className='md:w-2/4 flex flex-col justify-center items-center my-auto text-gray-600'>
				<div className='text-gray-700 text-lg font-semibold uppercase border-b-2 border-purple-700 my-6'>{`${currentQuiz.genre} quiz`}</div>
				<div className='flex justify-between w-full p-4 text-gray-400'>
					<div>
						<span className='font-extrabold text-3xl pr-1'>
							{quizState.currentQuestionNumber + 1}
						</span>
						<span className='text-xl'>/{currentQuiz.questions.length}</span>
					</div>
					<div>
						<span className='text-md pr-2'>SCORE</span>
						<span className='font-extrabold text-3xl'>{quizState.score}</span>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center px-2'>
					<div className='text-lg font-semibold mb-8'>
						{currentQuiz.questions[quizState.currentQuestionNumber].question}
					</div>
					<div className='flex flex-col w-4/5 mb-4'>
						{currentQuiz.questions[quizState.currentQuestionNumber].options.map(
							(option) => {
								return (
									<button
										className={`bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg mb-6 ${styleRightAndWrongAnswers(
											option.isRight,
											option.id,
										)}`}
										key={option.id}
										onClick={() => isRightAnswer(option.isRight, option.id)}
										disabled={disableButtons}>
										{option.text}
									</button>
								);
							},
						)}
					</div>
				</div>

				<button
					className='p-2 bg-purple-700 text-gray-50 uppercase font-semibold text-sm'
					onClick={nextQuestion}>
					Next Question
				</button>
			</div>
		</div>
	);
};
