import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useQuiz } from '../context/quizContext';
import { Object } from '../database/database.type';
import { CurrentQuestion } from './CurrentQuestion';

export const Quiz = () => {
	const { quizState, quizDispatch } = useQuiz();
	const { quizId } = useParams();
	const [currentQuiz, setCurrentQuiz] = useState<Object>();
	const [result, setResult] = useState<string>('');

	useEffect(() => {
		const findCurrentQuiz = quizState.quiz.find((quiz) => {
			return quiz.id === quizId;
		});
		setCurrentQuiz(findCurrentQuiz);
	}, []);
	console.log(quizState.currentQuestionNumber, currentQuiz?.questions.length);
	const nextQuestion = () => {
		if (currentQuiz) {
			quizState.currentQuestionNumber === currentQuiz.questions.length - 1
				? quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER', payload: -1 })
				: quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
		}
	};
	const isRightAnswer = (isRight: boolean) => {
		if (isRight) {
			setResult('Right Answer');
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload: currentQuiz?.questions[quizState.currentQuestionNumber].points,
			});
		} else {
			setResult('Wrong Answer');
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload:
					currentQuiz?.questions[quizState.currentQuestionNumber]
						.negativePoints,
			});
		}
	};

	return (
		<div>
			{currentQuiz && currentQuiz.questions[quizState.currentQuestionNumber] ? (
				<div>
					<div>
						{currentQuiz.questions[quizState.currentQuestionNumber].question}
					</div>
					{currentQuiz.questions[quizState.currentQuestionNumber].options.map(
						(option) => {
							return (
								<button
									key={option.id}
									onClick={() => isRightAnswer(option.isRight)}>
									{option.text}
								</button>
							);
						},
					)}
					<button onClick={nextQuestion}>Next Question</button>
					<div>{result}</div>
					<div>Score: {quizState.score}</div>
				</div>
			) : (
				<p>Your quiz has ended</p>
			)}
		</div>
	);
};
