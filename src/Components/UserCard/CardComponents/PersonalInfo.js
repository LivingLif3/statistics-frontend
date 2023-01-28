import React from 'react';

const PersonalInfo = ({ name, surname }) => {
  return (
    <div className="textOfnameHolder_ocf">
      <span className="textOfnameHolder_ocb name_ocb myTeamTextOfNameHolder_ocb">{name}</span>
      <span className="textOfnameHolder_ocb surname_ocb myTeamTextOfNameHolder_ocb">{surname}</span>
    </div>
  );
};

export default PersonalInfo;
