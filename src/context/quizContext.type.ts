
import { Object } from "../database/database.type";

export type State = {
    quiz: Object[];
    currentQuestionNumber: number;
    score: number;
}

export type ActionType = 
|{type: "LOAD_QUIZ", payload: [] | Object[]}
|{type: "INCREMENT_QUESTION_NUMBER", payload?: number}

