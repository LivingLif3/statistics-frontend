import React from 'react';

const AgeHolder = ({ age }) => {
  return (
    <div className="field myTeamField_ocf">
      <span className="textOfFields">Возраст:</span>
      <span className="ageResult">{age ? age : 'Не указан'}</span>
    </div>
  );
};

export default AgeHolder;
