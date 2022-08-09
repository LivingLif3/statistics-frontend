import React from 'react';
import './OneResultPoint.css';

const OneResultPoint = ({ date, answer }) => {
  console.log(date, 'date', answer, 'answer');
  return (
    <div className="result_orp">
      <span className="day_orp">{date}:</span>
      <span className="answer_orp">{answer}</span>
    </div>
  );
};

export default OneResultPoint;
