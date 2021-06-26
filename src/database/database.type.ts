export type Options = {
	_id: string;
	text: string;
	isRight: boolean;
};

export type Questions = {
	_id: string;
	question: string;
	points: number;
	negativePoints: number;
	options: Options[];
};

export type Quiz = {
	_id: string;
	genre: string;
	description: string;
	playTime: number;
	image: string;
	questions: Questions[];
};

export type QuizDatabase = Quiz[];
