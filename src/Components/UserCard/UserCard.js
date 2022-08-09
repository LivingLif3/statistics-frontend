import React from 'react';
import CardFront from './CardComponents/CardFront';
import OriginalCardBack from './CardComponents/CardBack';

const UserCard = ({ avatar }) => {
  return (
    <div className="cardDiv_Cab">
      <div className="card_Cab">
        <CardFront avatar={avatar} />
        <OriginalCardBack avatar={avatar} />
      </div>
    </div>
  );
};

export default UserCard;
