import QuestionCard from './components/questionCard/QuestionCard';

const App = () => {
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
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
