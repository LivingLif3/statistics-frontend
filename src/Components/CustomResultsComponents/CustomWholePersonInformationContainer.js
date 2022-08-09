import React from 'react';
import CustomFullQuestionHolder from './CustomFullQuestionHolder';

const CustomWholePersonInformationContainer = ({
  id,
  quizeTemplateQuestions,
  quizesCustomResultsInPeriods,
}) => {
  return (
    <div className="infoHolder_crp">
      {quizeTemplateQuestions &&
        quizeTemplateQuestions.map((question) => (
          <CustomFullQuestionHolder
            key={question._id}
            id={id}
            question={question._id}
            text={question.text}
            quizesCustomResultsInPeriods={quizesCustomResultsInPeriods}
          />
        ))}
    </div>
  );
};

export default CustomWholePersonInformationContainer;
