import React from 'react';

const WeightHolder = ({ weight }) => {
  return (
    <div className="field_ocf">
      <span className="textOfFields_ocf">Вес:</span>
      <span className="weightResult_ocf">{weight ? weight : 'Не указан'}</span>
    </div>
  );
};

export default WeightHolder;
