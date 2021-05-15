import { useQuiz } from '../context/quizContext';

export const Quiz = () => {
	const { quizState, quizDispatch } = useQuiz();
	console.log({ quizState, quizDispatch });
	return <div>Hi</div>;
};
