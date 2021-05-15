import {QuizDatabase} from "./database.type"
export const quizdatabase: QuizDatabase = [{
    id: 1,
    genre: "Fashion",
    description: "Take part in the amazing quiz and test your knowledge in fashion",
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
}]