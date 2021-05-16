import {QuizDatabase} from "./database.type"
import { v4 as uuidv4 } from 'uuid';
export const quizdatabase: QuizDatabase = [{
    id: uuidv4(),
    genre: "Fashion",
    description: "Take part in the amazing quiz and test your knowledge in fashion",
    playTime: 5,
    questions: [{
        id: uuidv4(),
        question: "What is your name?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Sruthi",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Vision",
                isRight: false
            }
        ]
    }, {
        id: uuidv4(),
        question: "What is your nationality?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "India",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "US",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Canada",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "London",
                isRight: false
            }
        ]
    }]
}]