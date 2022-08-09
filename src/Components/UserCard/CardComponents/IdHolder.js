import React from 'react';

const IdHolder = ({ id }) => {
  return (
    <div className="field_ocf">
      <span className="textOfFields_ocf">id:</span>
      <span className="id_ocf">{id.slice(0, 10)}...</span>
    </div>
  );
};

export default IdHolder;
