import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { QuizProvider } from './context/quizContext';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<QuizProvider>
					<App />
				</QuizProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
