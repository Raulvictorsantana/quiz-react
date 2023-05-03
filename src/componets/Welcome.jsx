import Quiz from "../img/quiz.svg"
import "./Welcome.css";




const Welcome = () => { 
  return (
    <div className="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botao abaixo para começar</p>
<button>Inicar</button>
<img src={Quiz} alt="inicio de quiz" />
    </div>
  )
}

export default Welcome
