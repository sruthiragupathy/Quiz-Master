import { State, ActionType} from "./quizContext.type";

export const quizReducer = (state: State, action: ActionType): State=> {
    console.log({action})
    switch(action.type){
        case "LOAD_QUIZ":
            return {
                ...state, quiz: action.payload
            }
        case "INCREMENT_QUESTION_NUMBER":
            const currentQuestionNumberTemp = action.payload || action.payload=== 0?action.payload:state.currentQuestionNumber+1;
            return {
                ...state, currentQuestionNumber: currentQuestionNumberTemp
            }
        default:
            return state
    }
}