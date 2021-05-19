import React from 'react';
import './App.css';
import './index.css';
import { Dashboard, Quiz } from './Components/index';
import { Routes, Route, Link } from 'react-router-dom';
import { Scoreboard } from './Components/Scoreboard';
const Nav = () => {
	return (
		<div className='max-w-100, h-screen flex justify-center items-center '>
			<Link to='/dashboard'>
				<button className='py-2 px-4 bg-purple-600 hover: bg-purple-700 text-gray-50 rounded-xl outline-none'>
					Go to Dashboard
				</button>
			</Link>
		</div>
	);
};

function App() {
	return (
		<div className='font-body text-center text-gray-500 box-border transition duration-500 ease-in-out dark:bg-gray-800 dark:text-gray-50'>
			<Routes>
				<Route path='/' element={<Nav />}></Route>
				<Route path='/dashboard' element={<Dashboard />}></Route>
				<Route path='/quiz/:quizId' element={<Quiz />}></Route>
				<Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
			</Routes>
		</div>
	);
}

export default App;
