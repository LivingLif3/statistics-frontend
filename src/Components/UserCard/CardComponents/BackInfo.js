import React from 'react';
import Devider from './Devider';
import EmailHolder from './EmailHolder';
import KivanoLinkHolder from './KivanoLinkHolder';
import PersonalInfo from './PersonalInfo';
import RoleHolder from './RoleHolder';

const OriginalBackInfoHolder = ({ email, role }) => {
  return (
    <div className="infoPartHolder_ocb">
      <PersonalInfo />
      <RoleHolder role={role} />
      <Devider />
      <EmailHolder email={email} />
      <KivanoLinkHolder />
    </div>
  );
};

export default OriginalBackInfoHolder;
