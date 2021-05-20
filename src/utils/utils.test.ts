import { quizdatabase } from '../database/database';
import {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
} from './utils';

const result = {
	quizId: '123',
	resultArray: [
		{
			id: '1',
			hasTaken: true,
			selectedOption: '999',
			correctOption: '999',
		},
		{
			id: '2',
			hasTaken: false,
			selectedOption: '111',
			correctOption: '112',
		},
	],
};

const currentQuiz = quizdatabase[0];

describe.only('testing utility functions of scoreboard', () => {
	test('should return the count of questions that has been attempted by the user', () => {
		const attemptedQuestionsCount = getAttemptedPercentage(result.resultArray);
		expect(attemptedQuestionsCount).toEqual(1);
	});

	test('should return the count of correct answers chosen by the player', () => {
		const rightAnswersCount = getRightAnswers(result.resultArray);
		expect(rightAnswersCount).toEqual(1);
	});

	test('should return the count of wrong answers chosen by the player', () => {
		const wrongAnswersCount = getWrongAnswers(result.resultArray);
		expect(wrongAnswersCount).toEqual(1);
	});

	test('should return the full score that can be scored by a player', () => {
		const fullScore = getTotalScore(currentQuiz);
		expect(fullScore).toEqual(4);
	});
});
