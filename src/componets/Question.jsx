import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState,)

    return (
        <div>
            <p>ola</p>
        </div>
    )
}
export default Question