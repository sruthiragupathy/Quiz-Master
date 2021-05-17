import {QuizDatabase} from "./database.type"
import { v4 as uuidv4 } from 'uuid';
export const quizdatabase: QuizDatabase = [{
    id: uuidv4(),
    genre: "Fashion",
    description: "Take part in the amazing quiz and test your knowledge in fashion",
    playTime: 5,
    image: "https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    questions: [{
        id: uuidv4(),
        question: "Which fashion designer is credited with having launched the skinny silhouette for menswear in the 2000s?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Karl Lagerfeld",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Hedi Slimane",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Ralph Lauren",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Raf Simons",
                isRight: false
            }
        ]
    }, {
        id: uuidv4(),
        question: "Which term describes a dress with a triangular silhouette?",
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
                isRight: false
            },
            {
                id: uuidv4(),
                text: "London",
                isRight: false
            }
        ]
    }]
}, {
    id: uuidv4(),
    genre: "Wildlife",
    description: "Take part in the amazing quiz and test your knowledge in fashion",
    playTime: 5,
    image: "https://images.pexels.com/photos/1123767/pexels-photo-1123767.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    questions: [{
        id: uuidv4(),
        question: "Which fashion designer is credited with having launched the skinny silhouette for menswear in the 2000s?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Karl Lagerfeld",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Hedi Slimane",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Ralph Lauren",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Raf Simons",
                isRight: false
            }
        ]
    }, {
        id: uuidv4(),
        question: "Which term describes a dress with a triangular silhouette?",
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
}, {
    id: uuidv4(),
    genre: "Food",
    description: "Take part in the amazing quiz and test your knowledge in fashion",
    playTime: 5,
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    questions: [{
        id: uuidv4(),
        question: "Which fashion designer is credited with having launched the skinny silhouette for menswear in the 2000s?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Karl Lagerfeld",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Hedi Slimane",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Ralph Lauren",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Raf Simons",
                isRight: false
            }
        ]
    }, {
        id: uuidv4(),
        question: "Which term describes a dress with a triangular silhouette?",
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