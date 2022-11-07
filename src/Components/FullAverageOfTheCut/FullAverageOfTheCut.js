import React from 'react';
import './FullAverageOfTheCut.css';

const FullAverageOfTheCut = ({ avResult }) => {
  return (
    <div className="average_fac">
      <span className="textOfAverage_fac">Среднее значение за срез:</span>
      <span className="averageNumber_fac">{avResult}</span>
    </div>
  );
};

export default FullAverageOfTheCut;
