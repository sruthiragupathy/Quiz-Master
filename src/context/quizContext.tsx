import React, { createContext, useContext, useReducer } from 'react';
import { quizdatabase } from '../database/database';
import { State } from './quizContext.type';
import { quizReducer } from './quizReducer';

const initialStates: State = {
	quiz: quizdatabase,
	currentQuestionNumber: -1,
	score: 0,
	result: {
		quizId: '',
		resultArray: [],
	},
	currentQuiz: {},
};
const AppContext = createContext<{
	quizState: State;
	quizDispatch: React.Dispatch<any>;
}>({
	quizState: initialStates,
	quizDispatch: () => null,
});

export const QuizProvider: React.FC = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(quizReducer, initialStates);
	// console.log({ quizState });
	return (
		<AppContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useQuiz = () => {
	return useContext(AppContext);
};
