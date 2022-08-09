import React from 'react';
import PlayerCheckBox from '../PlayerCheckBox/PlayerCheckBox';

const VerticalScrollOnPlayersCheckBox = ({ users, setUsers, teamPlayers }) => {
  return (
    <div className="scrolDownContainer_rp">
      {teamPlayers &&
        teamPlayers.map((player) => (
          <PlayerCheckBox
            id={player._id}
            key={player._id}
            users={users}
            setUsers={setUsers}
            name={player.name}
            surname={player.surname}
          />
        ))}
    </div>
  );
};

export default VerticalScrollOnPlayersCheckBox;
