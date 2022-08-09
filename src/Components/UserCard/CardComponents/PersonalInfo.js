import React from 'react';

const PersonalInfo = ({ name, surname }) => {
  return (
    <div className="nameHolder_ocb">
      <span className="textOfnameHolder_ocb name_ocb">{name}</span>
      <span className="textOfnameHolder_ocb surname_ocb">{surname}</span>
    </div>
  );
};

export default PersonalInfo;
