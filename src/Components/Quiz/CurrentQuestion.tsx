import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuiz } from '../../context/quizContext';
import { Quiz } from '../../database/database.type';

type Prop = {
	currentQuiz: Quiz;
};

export const CurrentQuestion = ({ currentQuiz }: Prop) => {
	const navigate = useNavigate();
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
		if (!optionId) {
			quizDispatch({
				type: 'UPDATE_RESULT',
				payload: {
					id: currentQuiz.questions[quizState.currentQuestionNumber].id,
					hasTaken: false,
					selectedOption: '',
					correctOption: currentQuiz.questions[
						quizState.currentQuestionNumber
					].options.find((option) => option.isRight)?.id,
				},
			});
		}
		setOptionId('');
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
		quizDispatch({
			type: 'UPDATE_RESULT',
			payload: {
				id: currentQuiz.questions[quizState.currentQuestionNumber].id,
				hasTaken: true,
				selectedOption: selectedOption,
				correctOption: currentQuiz.questions[
					quizState.currentQuestionNumber
				].options.find((option) => option.isRight)?.id,
			},
		});
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

	const viewScore = () => {
		navigate(`/quiz/${currentQuiz.id}/scoreboard`, { replace: true });
		if (!optionId) {
			quizDispatch({
				type: 'UPDATE_RESULT',
				payload: {
					id: currentQuiz.questions[quizState.currentQuestionNumber].id,
					hasTaken: false,
					selectedOption: '',
					correctOption: currentQuiz.questions[
						quizState.currentQuestionNumber
					].options.find((option) => option.isRight)?.id,
				},
			});
		}
	};
	return (
		<div className='max-w-full flex justify-center items-center h-full text-gray-600 dark:text-gray-50'>
			<div className='md:w-2/4 flex flex-col justify-center items-center my-auto'>
				<div className='text-lg font-semibold uppercase border-b-2 border-purple-700 my-6'>{`${currentQuiz.genre} quiz`}</div>
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
				<div className='flex flex-col justify-center items-center w-4/5 px-2'>
					<div className='text-lg font-semibold mb-8'>
						{currentQuiz.questions[quizState.currentQuestionNumber].question}
					</div>
					<div className='flex flex-col w-full mb-4'>
						{currentQuiz.questions[quizState.currentQuestionNumber].options.map(
							(option) => {
								return (
									<button
										className={`bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg mb-6 ${
											styleRightAndWrongAnswers(option.isRight, option.id)
												? styleRightAndWrongAnswers(option.isRight, option.id)
												: 'dark:bg-gray-700'
										}`}
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
				{quizState.currentQuestionNumber ===
				currentQuiz.questions.length - 1 ? (
					<button
						className='p-2 bg-purple-700 text-gray-50 uppercase font-semibold text-sm'
						onClick={viewScore}>
						View Score
					</button>
				) : (
					<button
						className='p-2 bg-purple-700 text-gray-50 uppercase font-semibold text-sm'
						onClick={nextQuestion}>
						Next Question
					</button>
				)}
			</div>
		</div>
	);
};
