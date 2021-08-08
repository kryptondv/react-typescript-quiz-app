import React from 'react';
import { Answer } from '../../App';

type CardProps = {
  question: string;
  answers: string[];
  cb: any;
  userAnswer: Answer | false;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<CardProps> = ({
  question,
  answers,
  cb,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map(answer => (
        <div key={answer}>
          <button disabled={!!userAnswer} onClick={() => cb(answer)}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
