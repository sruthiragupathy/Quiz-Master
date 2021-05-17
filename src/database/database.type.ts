export type Options = {
    id: string;
    text: string;
    isRight: boolean;
}

export type Questions = {
    id: string;
    question: string;
    points: number;
    negativePoints: number;
    options: Options[]
}

export type Object = {
    id: string;
    genre: string;
    description: string;
    playTime: number;
    image: string;
    questions: Questions[]
}

export type QuizDatabase = Object[]