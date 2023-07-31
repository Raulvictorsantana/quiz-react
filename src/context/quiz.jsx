import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
import question from "../data/question"


const STAGES = ["start", "playing", "end"]

const initialState = {
    gameStage: STAGES[0],
    question
}

const quisReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };



        default:
            return state;
    }

};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quisReducer, initialState);
    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>

}

QuizProvider.propTypes = {
    children: PropTypes.node.isRequired,
};