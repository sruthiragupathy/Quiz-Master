import React from 'react';
import './App.css';
import './index.css';
import { Dashboard, Quiz } from './Components/index';
import { Routes, Route, Link } from 'react-router-dom';
import { Scoreboard } from './Components/Scoreboard';
const Nav = () => {
	return (
		<>
			<Link to='/quiz'>Take Quiz</Link>
			<Link to='/dashboard'>Go to Dashboard</Link>
		</>
	);
};

function App() {
	return (
		<div className='font-body flex-col justify-center align-center text-center text-gray-500 box-border'>
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
