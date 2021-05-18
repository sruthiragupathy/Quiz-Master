import { Object, QuizDatabase } from '../database/database.type';

export type Result = {
	id: string;
	hasTaken: boolean;
	selectedOption: string;
	correctOption: string;
};
export type State = {
	quiz: Object[];
	currentQuestionNumber: number;
	score: number;
	result: {
		quizId: string;
		resultArray: Result[];
	};
	currentQuiz: null | Object | undefined;
};

export type ActionType =
	| { type: 'LOAD_QUIZ'; payload: QuizDatabase }
	| { type: 'INCREMENT_QUESTION_NUMBER'; payload?: number }
	| { type: 'UPDATE_SCORE'; payload: number }
	| { type: 'INITIALIZE_QUESTION_NUMBER' }
	| { type: 'UPDATE_RESULT'; payload: Result }
	| { type: 'UPDATE_QUIZID'; payload: string }
	| { type: 'LOAD_CURRENT_QUIZ'; payload: Object };
