import { Quiz, QuizDatabase } from '../database/database.type';

export type Result = {
	id: string;
	hasTaken: boolean;
	selectedOption: string;
	correctOption: string;
};

export type ScoreBoard = {
	_id: string;
	numberOfAttempts: Number;
	quizId: Quiz;
	score: Number;
	userId: String;
};

export type User = {
	_id: string;
	createdAt: string;
	updatedAt: string;
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
};

export type LeaderBoard = {
	_id: string;
	numberOfAttempts: Number;
	quizId: Quiz;
	score: Number;
	userId: User;
};

export type State = {
	quiz: Quiz[];
	currentQuestionNumber: number;
	score: number;
	result: {
		quizId: string;
		resultArray: Result[];
	};
	currentQuiz: null | Quiz;
	currentUserScoreBoard: ScoreBoard[];
	leaderBoard: LeaderBoard[];
};

export type QuizContext = {
	quizState: State;
	quizDispatch: React.Dispatch<any>;
};

export type ActionType =
	| { type: 'LOAD_QUIZ'; payload: QuizDatabase }
	| { type: 'INCREMENT_QUESTION_NUMBER'; payload?: number }
	| { type: 'UPDATE_SCORE'; payload: { points: number } }
	| { type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE' }
	| { type: 'UPDATE_RESULT'; payload: Result }
	| { type: 'UPDATE_QUIZID'; payload: string }
	| { type: 'LOAD_CURRENT_QUIZ'; payload: Quiz }
	| { type: 'LOAD_CURRENT_USER_SCORE_BOARD'; payload: ScoreBoard[] }
	| { type: 'SET_LEADERBOARD'; payload: LeaderBoard[] };
