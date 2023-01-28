import React from 'react';

const WeightHolder = ({ weight }) => {
  return (
    <div className="field myTeamField_ocf">
      <span className="textOfFields">Вес:</span>
      <span className="weightResult">{weight ? weight : 'Не указан'}</span>
    </div>
  );
};

export default WeightHolder;
