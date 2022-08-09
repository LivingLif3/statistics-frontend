import React from 'react';

const HeightHolder = ({ height }) => {
  return (
    <div className="field_ocf">
      <span className="textOfFields_ocf">Рост:</span>
      <span className="hieghtResult_ocf">{height ? height : 'Не указан'}</span>
    </div>
  );
};

export default HeightHolder;
