import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/quizContext';
import { Header } from './Header';

export const Dashboard = () => {
	const { quizState, quizDispatch } = useQuiz();
	return (
		<div>
			<Header />
			{quizState.quiz.map((quiz) => {
				return (
					<Link to={`/quiz/${quiz.id}`} key={quiz.id}>
						<button
							id={quiz.id}
							onClick={() =>
								quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER', payload: 0 })
							}>
							{quiz.genre}
						</button>
					</Link>
				);
			})}
		</div>
	);
};
