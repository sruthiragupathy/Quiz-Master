import {QuizDatabase} from "./database.type"
import { v4 as uuidv4 } from 'uuid';
export const quizdatabase: QuizDatabase = [{
    id: uuidv4(),
    genre: "Food",
    description: "Take part in the amazing quiz and test your knowledge in food",
    playTime: 5,
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    questions: [{
        id: uuidv4(),
        question: "Which of the following states in  India is called as 'Rice Bowl Of India'?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Andhra Pradhesh",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Punjab & Haryana",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "TamilNadu",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Maharashtra",
                isRight: false
            }
        ]
    },{
        id: uuidv4(),
        question: "Which of these countries is not a major producer of oranges?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Finland",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Iceland",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Switzerland",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "United States",
                isRight: false
            }
        ]
    }, ]
},{
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
        question: "Where did jeans come from?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Italy",
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
    description: "Take part in the amazing quiz and test your knowledge in Wildlife",
    playTime: 5,
    image: "https://images.pexels.com/photos/1123767/pexels-photo-1123767.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    questions: [{
        id: uuidv4(),
        question: "Which is the largest mammal on the planet?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Elephant",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Antarctic Blue Whale",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Hyena",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Rhinoceros",
                isRight: false
            }
        ]
    }, {
        id: uuidv4(),
        question: "What is a male zebra called?",
        points: 2,
        negativePoints: -2,
        options: [
            {
                id: uuidv4(),
                text: "Stag",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Bull",
                isRight: false
            },
            {
                id: uuidv4(),
                text: "Stallion",
                isRight: true
            },
            {
                id: uuidv4(),
                text: "Stag",
                isRight: false
            }
        ]
    }]
}]