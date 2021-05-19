import { quizdatabase } from '../database/database';
import { initialStates } from './quizContext';
import { ActionType } from './quizContext.type';
import { quizReducer } from './quizReducer';

describe('testing reducer', () => {
	test('should load the database in the quiz key of initialState object', () => {
		const action: ActionType = {
			type: 'LOAD_QUIZ',
			payload: [quizdatabase[0]],
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			quiz: [quizdatabase[0]],
			currentQuestionNumber: -1,
			score: 0,
			result: {
				quizId: '',
				resultArray: [],
			},
			currentQuiz: null,
		});
	});

	test('should increment the question number', () => {
		const action: ActionType = {
			type: 'INCREMENT_QUESTION_NUMBER',
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			currentQuestionNumber: 0,
		});
	});

	test('should update the score based on the input', () => {
		const action: ActionType = {
			type: 'UPDATE_SCORE',
			payload: 2,
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			score: 2,
		});
	});

	test('should initialize the currentQuestionNumber to 0', () => {
		const action: ActionType = {
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			currentQuestionNumber: 0,
			score: 0,
		});
	});

	test('should persist the details of each question', () => {
		const action: ActionType = {
			type: 'UPDATE_RESULT',
			payload: {
				id: '123',
				hasTaken: true,
				selectedOption: '1',
				correctOption: '1',
			},
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			result: {
				...initialStates.result,
				resultArray: [...initialStates.result.resultArray, action.payload],
			},
		});
	});

	test('should initialize the result array with current quiz', () => {
		const action: ActionType = {
			type: 'UPDATE_QUIZID',
			payload: '123',
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			result: {
				...initialStates.result,
				quizId: action.payload,
			},
		});
	});

	test('load the current quiz data in the context', () => {
		const action: ActionType = {
			type: 'LOAD_CURRENT_QUIZ',
			payload: quizdatabase[0],
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			...initialStates,
			currentQuiz: quizdatabase[0],
		});
	});
});
