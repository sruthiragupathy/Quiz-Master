import React from 'react';
import './App.css';
import './index.css';
import { Dashboard, Quiz, Home } from './Components';
import { Routes, Route } from 'react-router-dom';
import { Scoreboard } from './Components/Scoreboard/Scoreboard';

function App() {
	return (
		<div className='min-h-screen font-body text-center text-gray-500 box-border transition duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50'>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />}></Route>
				<Route path='/quiz/:quizId' element={<Quiz />}></Route>
				<Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
