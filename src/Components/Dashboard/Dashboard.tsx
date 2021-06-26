import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/quizContext';
import { Quiz } from '../../database/database.type';
import { Header } from './Header';
import { LeaderBoard } from './LeaderBoard';

export const Dashboard = () => {
	const { quizState, quizDispatch } = useQuiz();
	const takeQuiz = (quizId: string) => {
		quizDispatch({
			type: 'UPDATE_QUIZID',
			payload: quizId,
		});
	};
	const quizCard = (quiz: Quiz) => {
		return (
			<div className='w-full md:shadow-lg rounded-xl' key={quiz._id}>
				<div className='w-full'>
					<img src={quiz.image} alt={quiz.genre} />
				</div>
				<div className='text-left p-3'>
					<div className='text-lg mb-2 font-semibold'>{quiz.genre}</div>
					<div className='mb-2'>{quiz.description}</div>
					<div className='flex justify-between items-center'>
						<div className='text-sm text-gray-400'>
							{quiz.questions.length} Questions
						</div>
						<Link to={`/quiz/${quiz._id}`} key={quiz._id}>
							<button
								className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none'
								id={quiz._id}
								onClick={() => takeQuiz(quiz._id)}>
								TAKE QUIZ
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			<Header />
			<div className='py-6 md:p-10 grid gap-14 sm:grid-cols-2 md:grid-cols-3 md:gap-22 md:mx-10'>
				{quizState.quiz.map((quiz) => {
					return quizCard(quiz);
				})}
			</div>
		</div>
	);
};
