import {State, ActionType} from "./quizContext.type";

export const quizReducer = (state: State, action: ActionType): any=> {
    switch(action.type){
        case "LOAD_QUIZ":
            return {
                ...state, quiz: action.payload
            }
        default:
            return state
    }
}