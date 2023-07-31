import Welcome from "./componets/Welcome";
import './App.css'
import { useContext } from "react";
import Question from "./componets/question";
import { QuizContext } from "./context/quiz";
import { Provider } from 'react-redux'

function app() {
  const dispatch = usedispatch()


  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="App">
      <h1>Quiz app</h1>
      {quizState.gameStage == "start" && <Welcome />}
      {quizState.gameStage == "playinf" && <Question />}
    </div>
  );
}
export default app