
import { Object } from "../database/database.type";

export type State = {
    quiz: Object[];
}

export type ActionType = {type: "LOAD_QUIZ", payload: [] | Object[]}

