import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/quizContext';
import { Header } from './Header';

export const Dashboard = () => {
	const { quizState, quizDispatch } = useQuiz();
	const takeQuiz = (quizId: string): any => {
		quizDispatch({
			type: 'UPDATE_QUIZID',
			payload: quizId,
		});
		quizDispatch({
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		});
	};
	return (
		<div className='h-screen'>
			<Header />
			<div className='py-6 md:p-10 grid gap-14 sm:grid-cols-2 md:grid-cols-3 md:gap-22 md:mx-10'>
				{quizState.quiz.map((quiz) => {
					return (
						<div className='w-full md:shadow-lg rounded-xl'>
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
									<Link to={`/quiz/${quiz.id}`} key={quiz.id}>
										<button
											className='py-2 px-4 bg-purple-600 text-gray-50 text-sm font-semibold rounded-lg hover:bg-purple-700 outline-none'
											id={quiz.id}
											onClick={() => takeQuiz(quiz.id)}>
											TAKE QUIZ
										</button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
