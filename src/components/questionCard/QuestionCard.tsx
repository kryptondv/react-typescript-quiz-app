import React from 'react';
import { Answer } from '../../App';

import { Wrapper, ButtonWrapper, ButtonWrapperProps } from './styles';

type CardProps = {
  question: string;
  answers: string[];
  cb: (answer: string) => void;
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
}) => {
  const getButtonWrapperProps = (answer: string): ButtonWrapperProps => ({
    correct: (userAnswer as Answer)?.correctAnswer === answer,
    userClicked: (userAnswer as Answer)?.answer === answer,
  });

  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map(answer => (
          <ButtonWrapper key={answer} {...getButtonWrapperProps(answer)}>
            <button disabled={!!userAnswer} onClick={() => cb(answer)}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
