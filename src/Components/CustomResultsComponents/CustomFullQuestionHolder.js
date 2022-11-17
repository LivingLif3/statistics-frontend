import React, { useEffect, useState } from 'react';
import CustomAnswersOfOneQuestion from './CustomAnswersOfOneQuestion';
import moment from 'moment';

const CustomContainerWithTheWholeQuestion = ({
  id,
  text,
  question,
  quizesCustomResultsInPeriods,
}) => {
  let [questionResults, setQuestionResults] = useState([]);
  useEffect(() => {
    let resultsOfOneQuestion = [];
    if (id && question && quizesCustomResultsInPeriods) {
      for (let results of quizesCustomResultsInPeriods) {
        for (let result of results) {
          if (result.user.toString() === id.toString()) {
            for (let answer of result.answers) {
              console.log(answer.question, 'answer.question');
              console.log(question, 'question');
              if (answer.questionTemplate.toString() === question.toString()) {
                console.log('sasha');
                resultsOfOneQuestion.push({
                  date: moment(result.createdAt).format('YY-MM-DD'),
                  answer: answer.answer,
                });
              }
            }
          }
        }
      }
      console.log(resultsOfOneQuestion);
      setQuestionResults(resultsOfOneQuestion);
    }
  }, [quizesCustomResultsInPeriods]);

  return (
    <div className="questionHolder_crp">
      <span className="question_crp">{text}</span>
      <CustomAnswersOfOneQuestion questionResults={questionResults} />
    </div>
  );
};

export default CustomContainerWithTheWholeQuestion;
