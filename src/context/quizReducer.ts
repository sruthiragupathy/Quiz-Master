import { State, ActionType} from "./quizContext.type";

export const quizReducer = (state: State, action: ActionType): State=> {
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
        case "UPDATE_SCORE":
            return{
                ...state, score: state.score + action.payload
            }
        case "INITIALIZE_SCORE":
            return{
                ...state, score:0
            }
        case "UPDATE_RESULT":
            return {...state, result: {...state.result, resultArray: [...state.result?.resultArray, action.payload]}}
        case "UPDATE_QUIZID":
            return {...state, result: {...state.result, quizId: action.payload, resultArray:[]}}
        case "LOAD_CURRENT_QUIZ":
            return {...state, currentQuiz: action.payload}
        default:
            return state
    }
}