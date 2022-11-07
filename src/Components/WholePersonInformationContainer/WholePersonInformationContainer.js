import React, { useState } from 'react';
import FullAverageOfTheCut from '../FullAverageOfTheCut/FullAverageOfTheCut';
import ContainerWithTheWholeQuestion from '../ContainerWithTheWholeQuestion/ContainerWithTheWholeQuestion';

const WholePersonInformationContainer = ({ quizeTemplateQuestions, results, click, setClick }) => {
  console.log('results.questions for average', results);
  const [avResult, setAvResult] = useState(0);
  React.useMemo(() => {
    let endSum = 0;
    for (let questionResults of results.questions) {
      let sum = 0;
      for (let answers of questionResults.questionAnswers) {
        answers.forEach((result) => {
          sum += result.answer;
        });
        sum /= answers.length;
      }
      endSum += sum;
    }
    endSum /= results.questions.length;
    setAvResult(endSum);
  }, [results]);
  return (
    <div className={`infoHolder_an ${click && 'showBlock'}`}>
      {quizeTemplateQuestions &&
        quizeTemplateQuestions.map((question) => (
          <ContainerWithTheWholeQuestion
            text={question.text}
            questionResults={results.questions.filter(
              (result) => question._id.toString() === result.id.toString(),
            )}
          />
        ))}
      <FullAverageOfTheCut avResult={avResult} />
    </div>
  );
};

export default WholePersonInformationContainer;
