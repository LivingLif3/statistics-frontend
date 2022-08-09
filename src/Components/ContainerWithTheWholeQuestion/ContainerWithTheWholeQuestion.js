import React from 'react';
import './ContainerWithTheWholeQuestion.css';
import AnswersContainerOfOneQuestion from '../AnswersContainerOfOneQuestion/AnswersContainerOfOneQuestion';
import FieldOfAverageMark from '../FieldOfAverageMark/FieldOfAverageMark';

const ContainerWithTheWholeQuestion = ({ text, questionResults }) => {
  return (
    <div className="questionHolder_cwtwq">
      <span className="question_cwtwq">{text}</span>
      <AnswersContainerOfOneQuestion questionResults={questionResults} />
      <FieldOfAverageMark answersResults={questionResults.length > 0 ? questionResults[0] : null} />
    </div>
  );
};

export default ContainerWithTheWholeQuestion;
