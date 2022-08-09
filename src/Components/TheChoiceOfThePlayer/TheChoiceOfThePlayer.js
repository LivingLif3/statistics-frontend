import React from 'react';
import AllPlayerCheckBox from '../AllPlayerCheckBox/AllPlayerCheckBox';
import VerticalScrollOnPlayersCheckBox from '../VerticalScrollOnPlayersCheckBox/VerticalScrollOnPlayersCheckBox';
import './TheChoiceOfThePlayer.css';

const TheChoiceOfThePlayer = ({ users, setUsers, teamPlayers }) => {
  return (
    <div className="playerChoice_tcp">
      <div className="center_tcp">
        <VerticalScrollOnPlayersCheckBox
          users={users}
          setUsers={setUsers}
          teamPlayers={teamPlayers}
        />
      </div>
    </div>
  );
};

export default TheChoiceOfThePlayer;
