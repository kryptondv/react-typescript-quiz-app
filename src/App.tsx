import { useState } from 'react';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import QuestionCard from './components/questionCard/QuestionCard';

export type Answer = {
  question: string;
  answer: string;
  isCorrect: boolean;
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

  const checkAnswer = (answer: string) => {
    if (!gameOver) {
      const isCorrect = questions[currentQuestion].correct_answer === answer;
      isCorrect && setScore(prev => prev + 1);
      const answerObject: Answer = {
        question: questions[currentQuestion].question,
        answer,
        isCorrect,
        correctAnswer: questions[currentQuestion].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
      currentQuestion === questions.length - 1 && setGameOver(true);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };
  return (
    <div>
      <h1>Quiz App</h1>
      {gameOver && (
        <button className="start" onClick={startQuiz}>
          Start
        </button>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
      {gameOver && <p>Game Over. Your final score is {score}</p>}
      {loading && <p>Loading Questions</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={currentQuestion + 1}
          totalQuestions={questions.length}
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
          userAnswer={!!userAnswers.length && userAnswers[currentQuestion]}
          cb={checkAnswer}
        />
      )}
      {!gameOver && !loading && currentQuestion + 1 < questions.length && (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default App;
