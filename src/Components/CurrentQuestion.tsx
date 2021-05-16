import { useState } from 'react';
import { useQuiz } from '../context/quizContext';
import { Questions } from '../database/database.type';

type Prop = {
	question: Questions;
	index: number;
};

export const CurrentQuestion = ({ question, index }: Prop) => {
	const { quizState, quizDispatch } = useQuiz();
	const nextQuestion = () => {
		quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
	};
	return (
		<div>
			{quizState.currentQuestionNumber === index && (
				<div>
					{question.question}
					<button onClick={nextQuestion}>Next Question</button>
				</div>
			)}
			{quizState.currentQuestionNumber > index && <div>Quiz has ended</div>}
		</div>
	);
};
