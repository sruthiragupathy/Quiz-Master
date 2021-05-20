import { Result } from '../context/quizContext.type';
import { Quiz } from '../database/database.type';

const getAttemptedPercentage = (resultArray: Result[]): number => {
	const attemptedQuizArray = resultArray.filter((result) => result.hasTaken);
	return attemptedQuizArray.length;
};
const getRightAnswers = (resultArray: Result[]): number => {
	const rightAnswers = resultArray.filter(
		(result) => result.correctOption === result.selectedOption,
	);
	return rightAnswers.length;
};
const getWrongAnswers = (resultArray: Result[]): number => {
	const wrongAnswers = resultArray.filter(
		(result) => result.correctOption !== result.selectedOption,
	);
	return wrongAnswers.length;
};
const getTotalScore = (currentQuiz: Quiz | null): number => {
	const totalScore = currentQuiz?.questions.reduce((acc, curr) => {
		return acc + curr.points;
	}, 0);

	return totalScore ? totalScore : 0;
};

export {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
};
