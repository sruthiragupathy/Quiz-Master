import React from 'react';
import './App.css';
import './index.css';
import { Dashboard, Quiz, Home, Login } from './Components';
import { Routes, Route } from 'react-router-dom';
import { Scoreboard } from './Components/Scoreboard/Scoreboard';
import { useQuiz } from './context/quizContext';
import { useAuthentication } from './context/authenticationContext';

function App() {
	const quiz = useQuiz();
	const { authState } = useAuthentication();
	console.log({ authState });
	console.log({ quiz });
	return (
		<div className='min-h-screen font-body text-center text-gray-500 box-border transition duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50'>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />}></Route>
				<Route path='/quiz/:quizId' element={<Quiz />}></Route>
				<Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</div>
	);
}

export default App;
