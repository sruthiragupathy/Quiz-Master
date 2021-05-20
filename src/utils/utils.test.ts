import { CurrentQuestion } from '../Components/Quiz/CurrentQuestion';
import { quizdatabase } from '../database/database';
import {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
	getCurrentQuestion,
	styleRightAndWrongAnswers,
	isOptionSelected,
	isRightAnswer,
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

describe('testing utility functions of scoreboard', () => {
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

describe('testing the utility functions of CheckAnswers component', () => {
	test('should return the result object matching the passed question id', () => {
		const currentQuestion = getCurrentQuestion(result.resultArray, '1');
		expect(currentQuestion).toEqual({
			id: '1',
			hasTaken: true,
			selectedOption: '999',
			correctOption: '999',
		});
	});
	test('should return if the given option has been selected by the user or not', () => {
		let isSelected = isOptionSelected(result.resultArray, '999', '1');
		expect(isSelected).toEqual(true);
		isSelected = isOptionSelected(result.resultArray, '100', '1');
		expect(isSelected).toEqual(false);
	});
	test('should return if the given option is right answer or not', () => {
		let isRight = isRightAnswer(result.resultArray, '999', '1');
		expect(isRight).toEqual(true);
		isRight = isOptionSelected(result.resultArray, '100', '1');
		expect(isRight).toEqual(false);
	});
	test('should return the appropriate style for right and wrong answers', () => {
		const rightAnswerStyle = styleRightAndWrongAnswers(
			result.resultArray,
			'999',
			'1',
		);
		expect(rightAnswerStyle).toEqual(
			'bg-green-500 text-gray-50 hover:bg-green-600',
		);
		const wrongAnswerStyle = styleRightAndWrongAnswers(
			result.resultArray,
			'100',
			'1',
		);
		expect(wrongAnswerStyle).toEqual(
			'bg-red-500 text-gray-50 hover:bg-red-600',
		);
	});
});
