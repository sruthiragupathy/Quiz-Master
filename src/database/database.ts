import {QuizDatabase} from "./database.type"
export const quizdatabase: QuizDatabase = {
    genre: "Fashion",
    playTime: 5,
    questions: [{
        question: "What is your name?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                text: "Sruthi",
                isRight: true
            },
            {
                text: "Vision",
                isRight: false
            }
        ]
    }]
}