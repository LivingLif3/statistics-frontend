import React from 'react';
import QuestionCheckBox from '../QuestionCheckBox/QuestionCheckBox';

const QuestionCheckBoxScroller = React.memo(
  ({
    quizeTemplateQuestions,
    setSelectedQuestion,
    selectedQuestion,
    setAllQuestions,
    allQuestions,
  }) => {
    console.log(quizeTemplateQuestions);
    return (
      <div className="checkBowScroller_rp">
        {quizeTemplateQuestions &&
          quizeTemplateQuestions.map((question) => (
            <QuestionCheckBox
              id={question._id}
              text={question.text}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
              setAllQuestions={setAllQuestions}
              allQuestions={allQuestions}
            />
          ))}
      </div>
    );
  },
);

export default QuestionCheckBoxScroller;
