export type Options = {
    text: string;
    isRight: boolean;
}

export type Questions = {
    question: string;
    points: number;
    negativePoints: number;
    options: Options[]
}

export type QuizDatabase = {
    genre: string;
    playTime: number;
    questions: Questions[]
}