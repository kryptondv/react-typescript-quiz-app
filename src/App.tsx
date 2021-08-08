import { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import QuestionCard from './components/questionCard/QuestionCard';

type Answer = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(10, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestion(0);
    setLoading(false);
  };

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
