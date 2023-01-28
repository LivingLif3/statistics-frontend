import React from 'react';
import AgeHolder from './AgeHolder';
import Devider from './Devider';
import HeightHolder from './HeightHolder';
import IdHolder from './IdHolder';
import PersonalInfo from './PersonalInfo';
import RoleHolder from './RoleHolder';
import WeightHolder from './WeightHolder';

const FrontInfoHolder = ({ id, name, surname, role, age, height, weight }) => {
  return (
    <div className="infoPartHolder myTeamInfoPartHolder_ocf">
      <PersonalInfo name={name} surname={surname} />
      <RoleHolder role={role} />
      <Devider />
      <WeightHolder weight={weight} />
      <HeightHolder height={height} />
      <AgeHolder age={age} />
      <IdHolder id={id} />
    </div>
  );
};

export default FrontInfoHolder;
