import React from 'react';
import './BlockOfTeam.css';
import FooterOfATeamGraph from '../FooterOfATeamGraph/FooterOfATeamGraph';
import TeamGraph from '../TeamGraph/TeamGraph';
import HeaderOfATeamGraph from '../HeaderOfATeamGraph/HeaderOfATeamGraph';

const BlockOfTeam = React.memo(
  ({
    dataToTeamGraph,
    quizeTemplateQuestions,
    setAllQuestions,
    allQuestions,
    selectedQuestion,
    setSelectedQuestion,
    selectedQuestionData,
    getRandomColor,
  }) => {
    return (
      <div className="firstGraphTeamDiv_bt">
        <HeaderOfATeamGraph dataToTeamGraph={dataToTeamGraph} />
        <TeamGraph
          dataToTeamGraph={dataToTeamGraph}
          allQuestions={allQuestions}
          selectedQuestion={selectedQuestion}
          selectedQuestionData={selectedQuestionData}
          getRandomColor={getRandomColor}
        />
        <FooterOfATeamGraph
          quizeTemplateQuestions={quizeTemplateQuestions}
          setAllQuestions={setAllQuestions}
          allQuestions={allQuestions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
      </div>
    );
  },
);

export default BlockOfTeam;
