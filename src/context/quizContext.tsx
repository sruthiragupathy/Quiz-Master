import { State } from 'history';
import React, { createContext, useContext, useReducer } from 'react';
import { quizdatabase } from '../database/database';
import { quizReducer } from './quizReducer';

const initialStates: State = {
	quiz: quizdatabase,
};
const AppContext = createContext<State>({});

export const QuizProvider: React.FC = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(quizReducer, initialStates);
	return (
		<AppContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useQuiz = () => {
	return useContext(AppContext);
};
