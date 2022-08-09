import React from 'react';
import CustomTheOnlyResult from './CustomTheOnlyResult';

const CustomAnswersContainerOfOneQuestion = ({ questionResults }) => {
  console.log(questionResults);
  return (
    <div className="resultDiv_crp">
      {questionResults.length > 0 &&
        questionResults.map((result) => <CustomTheOnlyResult result={result} />)}
    </div>
  );
};

export default CustomAnswersContainerOfOneQuestion;
