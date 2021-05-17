import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../context/quizContext';
import { Object } from '../database/database.type';
import { CurrentQuestion } from './CurrentQuestion';

export const Quiz = () => {
	const { quizState, quizDispatch } = useQuiz();
	const { quizId } = useParams();
	const [currentQuiz, setCurrentQuiz] = useState<Object>();
	console.log({ quizState });

	useEffect(() => {
		const findCurrentQuiz = quizState.quiz.find((quiz) => {
			return quiz.id === quizId;
		});
		quizDispatch({ type: 'LOAD_CURRENT_QUIZ', payload: findCurrentQuiz });
		setCurrentQuiz(findCurrentQuiz);
	}, []);
	console.log(quizState.currentQuestionNumber, currentQuiz?.questions.length);

	return (
		<div>
			{currentQuiz && currentQuiz.questions[quizState.currentQuestionNumber] ? (
				<CurrentQuestion currentQuiz={currentQuiz} />
			) : (
				<p>Your quiz has ended</p>
			)}
		</div>
	);
};
