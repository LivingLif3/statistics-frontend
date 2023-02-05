import React from 'react';
import UserCardForTeam from '../UserCard/UserCardForTeam';

const ShowPlayersCards = ({ players, team, onDelete, role, deletePlayer }) => {
  return (
    <div className="container_nature">
      {players
        ? players.map((trainer) => (
            <div className="card_test">
              <UserCardForTeam
                key={trainer._id}
                id={trainer._id}
                img={trainer.img}
                name={trainer.name}
                surname={trainer.surname}
                role={trainer.role}
                age={trainer.age}
                height={trainer.height}
                weight={trainer.weight}
                deletePlayer={deletePlayer}
                teamId={trainer.team}
                myRole={role}
                onDelete={onDelete}
                mainTrainer={team.mainTrainer}
              />
            </div>
          ))
        : 'Пусто'}
    </div>
  );
};

export default ShowPlayersCards;
