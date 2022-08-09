import React from 'react';
import './FieldOfAverageMark.css';

const FieldOfAverageMark = ({ answersResults }) => {
  let answer = 0;
  let averageAnswers = [];
  if (answersResults) {
    averageAnswers = answersResults.questionAnswers.map((answer) => answer[0]);
    averageAnswers.forEach((answerNumber) => {
      answer += answerNumber.answer;
    });
    answer /= averageAnswers.length;
  }

  return (
    <div className="average_fam">
      <span className="textOfAverage_fam">Среднее значение:</span>
      <span className="averageNumber_fam">{answer}</span>
    </div>
  );
};

export default FieldOfAverageMark;
