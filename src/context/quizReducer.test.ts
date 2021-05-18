import { quizdatabase } from '../database/database';
import { initialStates } from './quizContext';
import { ActionType } from './quizContext.type';
import { quizReducer } from './quizReducer';

describe('testing reducer', () => {
	it('should load the database in the quiz key of initialState object', () => {
		const action: ActionType = {
			type: 'LOAD_QUIZ',
			payload: quizdatabase,
		};
		const state = quizReducer(initialStates, action);
		expect(state).toEqual({
			quiz: quizdatabase,
			currentQuestionNumber: -1,
			score: 0,
			result: {
				quizId: '',
				resultArray: [],
			},
			currentQuiz: null,
		});
	});
});
