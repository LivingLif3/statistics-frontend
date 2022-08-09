import React from 'react';
import FullAverageOfTheCut from '../FullAverageOfTheCut/FullAverageOfTheCut';
import ContainerWithTheWholeQuestion from '../ContainerWithTheWholeQuestion/ContainerWithTheWholeQuestion';

const WholePersonInformationContainer = ({ quizeTemplateQuestions, results, click, setClick }) => {
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
      <FullAverageOfTheCut />
    </div>
  );
};

export default WholePersonInformationContainer;
