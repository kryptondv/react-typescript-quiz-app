import { useState } from 'react';
import QuestionCard from './components/questionCard/QuestionCard';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {};

  const checkAnswer = (e: MouseEvent) => {};

  const nextQuestion = () => {};
  return (
    <div>
      <h1>Quiz App</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score"></p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionNr={currentQuestion + 1}
        totalQuestions={questions.length}
        question={questions[currentQuestion].question}
        answers={questions[currentQuestion].answers}
        userAnswer={!!userAnswers.length && userAnswers[currentQuestion]}
        cb={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
