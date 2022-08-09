import React from 'react';
import OneResultPoint from '../TheOnlyResult/OneResultPoint';
import './AnswersContainerOfOneQuestion.css';

const AnswersContainerOfOneQuestion = ({ questionResults }) => {
  console.log(questionResults, 'questionResults');
  return (
    <div className="resultDiv_acoq">
      {questionResults.length > 0 &&
        questionResults[0].questionAnswers.map((answer) => (
          <OneResultPoint date={answer[0].date} answer={answer[0].answer} />
        ))}
    </div>
  );
};

export default AnswersContainerOfOneQuestion;
