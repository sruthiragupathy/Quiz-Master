import React from 'react';
import './App.css';
import './index.css';
import { Dashboard, Quiz, Home, Login, ScoreTracker } from './Components';
import { Routes, Route } from 'react-router-dom';
import { Scoreboard } from './Components/Scoreboard/Scoreboard';
import { useQuiz } from './context/quizContext';
import { useAuthentication } from './context/authenticationContext';
import axios from 'axios';
import { useEffect } from 'react';
import { BACKEND } from './utils/api';
import { LeaderBoard } from './Components/Dashboard/LeaderBoard';
import { SignUp } from './Components/Authentication/Signup';

function App() {
	const {
		authState: { token },
	} = useAuthentication();
	const { quizDispatch } = useQuiz();
	useEffect(() => {
		(async function () {
			const {
				data: { attemptedQuizScores },
				status,
			} = await axios({
				method: 'GET',
				url: `${BACKEND}/scoreboard`,
				headers: {
					authorization: token,
				},
			});
			if (status === 200) {
				quizDispatch({
					type: 'LOAD_CURRENT_USER_SCORE_BOARD',
					payload: attemptedQuizScores,
				});
			}
		})();

		(async function () {
			const {
				data: { attemptedQuizScores },
				status,
			} = await axios({
				method: 'GET',
				url: `${BACKEND}/scoreboard`,
				headers: {
					authorization: token,
				},
			});
			if (status === 200) {
				quizDispatch({
					type: 'LOAD_CURRENT_USER_SCORE_BOARD',
					payload: attemptedQuizScores,
				});
			}
		})();
	}, []);
	return (
		<div className='min-h-screen font-body text-center text-gray-500 box-border transition duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50'>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />}></Route>
				<Route path='/quiz/:quizId' element={<Quiz />}></Route>
				<Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
				<Route path='/profile/:username' element={<ScoreTracker />}></Route>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>

				<Route path='/leaderboard' element={<LeaderBoard />}></Route>
			</Routes>
		</div>
	);
}

export default App;
