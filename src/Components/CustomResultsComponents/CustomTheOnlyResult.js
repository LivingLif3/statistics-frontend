import React from 'react';
import './CustomTheOnlyResults.css';

const CustomOneResultPoint = ({ result }) => {
  return (
    <div className="result_corp">
      <div className="day_corp">{result.date}</div>
      <div className="answer_corp">{result.answer}</div>
    </div>
  );
};

export default CustomOneResultPoint;
