import React from 'react';
import CustomHolderOfAPlayer from './CustomHolderOfAPlayer';

const CustomBlockOfAnalytics = ({
  quizesCustomResultsInPeriods,
  teamPlayers,
  quizeTemplateQuestions,
}) => {
  return (
    <div className="otherInfo_rp">
      <div className="upperPart_rp">
        <span className="headerr_rp">Аналитическое представление</span>
      </div>
      {teamPlayers &&
        teamPlayers.map((player) => (
          <CustomHolderOfAPlayer
            key={player._id}
            id={player._id}
            name={player.name}
            surname={player.surname}
            quizeTemplateQuestions={quizeTemplateQuestions}
            quizesCustomResultsInPeriods={quizesCustomResultsInPeriods}
          />
        ))}
    </div>
  );
};

export default CustomBlockOfAnalytics;
