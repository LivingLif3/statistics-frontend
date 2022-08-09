import React, { useEffect, useState } from 'react';
import AnswerSectionPlug from '../AnswerSectionPlug/AnswerSectionPlug';
import QuestionBar from '../QuestionBar/QuestionBar';

const AnswerSection = ({
  quizeQuestions,
  answers,
  setAnswers,
  answersTest,
  sendAnswer,
  selectedQuiz,
  selectedQuizObject,
  setSelectedQuiz,
}) => {
  let [submit, setSubmit] = useState(0);
  let onSubmit = () => {
    setSubmit(submit + 1);
    // answersTest = [];
  };
  useEffect(() => {
    let findNull = false;
    answers.forEach((element) => {
      if (element.answer === null) {
        findNull = true;
      }
    });
    if (!findNull && answers.length > 0) {
      sendAnswer(selectedQuiz, answers, selectedQuizObject.custom);
      setAnswers([]);
      setSelectedQuiz(null);
    }
  }, [submit]);
  return (
    <>
      <div className="answerSection_n">
        {/* <AnswerSectionPlug/> */}
        {quizeQuestions ? (
          quizeQuestions.map((question) => (
            <QuestionBar
              id={question._id}
              text={question.text}
              answers={answers}
              submit={submit}
              setAnswers={setAnswers}
              answersTest={answersTest}
              selectedQuizObject={selectedQuizObject}
            />
          ))
        ) : (
          <AnswerSectionPlug />
        )}
      </div>
      <div className="bottomButtonHolder_n">
        {selectedQuiz && (
          <button className="buttonToSend_n" onClick={onSubmit}>
            Завершить
          </button>
        )}
      </div>
    </>
  );
};

export default AnswerSection;
