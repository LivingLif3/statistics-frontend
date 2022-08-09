import React from 'react';
import './HorizontalScrollOnQuestionCheckBox.css';
import QuestionCheckBoxGraph2 from '../QuestionCheckBoxGraph2/QuestionCheckBox';

const HorizontalScrollOnQuestionCheckBox = ({ quizeTemplateQuestions, question, setQuestion }) => {
  return (
    <div className="checkBowScroller_rp">
      {quizeTemplateQuestions &&
        quizeTemplateQuestions.map((questionTemplate) => (
          <QuestionCheckBoxGraph2
            key={questionTemplate._id}
            id={questionTemplate._id}
            text={questionTemplate.text}
            question={question}
            setQuestion={setQuestion}
          />
        ))}
    </div>
  );
};

export default HorizontalScrollOnQuestionCheckBox;
