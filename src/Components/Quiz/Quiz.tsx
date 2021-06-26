import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../../context/quizContext';
import { CurrentQuestion } from './CurrentQuestion';
import { Rules } from './Rules';

export const Quiz = () => {
	const { quizState, quizDispatch } = useQuiz();
	const { quizId } = useParams();
	const [start, setStart] = useState<boolean>(false);

	useEffect(() => {
		const findCurrentQuiz = quizState.quiz.find((quiz) => {
			return quiz._id === quizId;
		});

		quizDispatch({ type: 'LOAD_CURRENT_QUIZ', payload: findCurrentQuiz });
	}, [quizState.quiz]);

	return (
		<div>
			{!start && <Rules setStart={setStart} />}
			<div>
				{start &&
				quizState.currentQuiz &&
				quizState.currentQuiz.questions[quizState.currentQuestionNumber] ? (
					<CurrentQuestion currentQuiz={quizState.currentQuiz} />
				) : null}
			</div>
		</div>
	);
};
