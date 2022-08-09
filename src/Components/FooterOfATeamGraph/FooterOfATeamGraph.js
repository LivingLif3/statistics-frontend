import React from 'react';
import AllQuestionCheckBox from '../AllQuestionCheckBox/AllQuestionCheckBox';
import QuestionCheckBoxScroller from '../QuestionCheckBoxScroller/QuestionCheckBoxScroller';

const FooterOfATeamGraph = ({
  quizeTemplateQuestions,
  setAllQuestions,
  allQuestions,
  selectedQuestion,
  setSelectedQuestion,
}) => {
  return (
    <div className="butttonHolder_ftg">
      {/* Вот этот сохнаняется всегда и всегда идет первым чекбоксом */}
      <AllQuestionCheckBox setAllQuestions={setAllQuestions} allQuestions={allQuestions} />

      <QuestionCheckBoxScroller
        quizeTemplateQuestions={quizeTemplateQuestions}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        setAllQuestions={setAllQuestions}
        allQuestions={allQuestions}
      />
    </div>
  );
};

export default FooterOfATeamGraph;
