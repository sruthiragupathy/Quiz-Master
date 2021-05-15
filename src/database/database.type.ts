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

export type Object = {
    id: number;
    genre: string;
    description: string;
    playTime: number;
    questions: Questions[]
}

export type QuizDatabase = Object[]