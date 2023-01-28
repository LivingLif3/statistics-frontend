import React from 'react';

const HeightHolder = ({ height }) => {
  return (
    <div className="field myTeamField_ocf">
      <span className="textOfFields">Рост:</span>
      <span className="heightResult">{height ? height : 'Не указан'}</span>
    </div>
  );
};

export default HeightHolder;
