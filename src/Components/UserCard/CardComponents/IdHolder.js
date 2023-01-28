import React from 'react';

const IdHolder = ({ id }) => {
  return (
    <div className="field myTeamField_ocf">
      <span className="textOfFields">id:</span>
      <span className="id">{id && id.slice(0, 10)}...</span>
    </div>
  );
};

export default IdHolder;
