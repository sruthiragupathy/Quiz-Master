import { quizdatabase } from '../database/database';
import { initialStates } from './quizContext';
import { ActionType } from './quizContext.type';
import { quizReducer } from './quizReducer';

describe('testing reducer', () => {
	test('should load the database in the quiz key of initialState object', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'LOAD_QUIZ',
			payload: [quizdatabase[0]],
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state.quiz).toEqual([quizdatabase[0]]);
	});

	test('should increment the question number', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'INCREMENT_QUESTION_NUMBER',
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state.currentQuestionNumber).toEqual(0);
	});

	test('should update the score based on the input', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'UPDATE_SCORE',
			payload: {
				points: 2,
			},
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state.score).toEqual(2);
	});

	test('should initialize the currentQuestionNumber and score to 0', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state).toEqual({
			...initialStates,
			currentQuestionNumber: 0,
			score: 0,
		});
	});

	test('should persist the details of each question', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'UPDATE_RESULT',
			payload: {
				id: '123',
				hasTaken: true,
				selectedOption: '1',
				correctOption: '1',
			},
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state).toEqual({
			...initialStates,
			result: {
				...initialStates.result,
				resultArray: [...initialStates.result.resultArray, action.payload],
			},
		});
	});

	test('should initialize the result array with current quiz', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'UPDATE_QUIZID',
			payload: '123',
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state).toEqual({
			...initialStates,
			result: {
				...initialStates.result,
				quizId: action.payload,
			},
		});
	});

	test('load the current quiz data in the context', () => {
		//ARRANGE
		const action: ActionType = {
			type: 'LOAD_CURRENT_QUIZ',
			payload: quizdatabase[0],
		};
		//ACT
		const state = quizReducer(initialStates, action);
		//ASSERT
		expect(state.currentQuiz).toEqual(quizdatabase[0]);
	});
});
