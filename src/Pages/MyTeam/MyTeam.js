import React, { useEffect, useState } from 'react';
import './MyTeam.css';
import './MyTeamAdoptation.css';
import './MyTeamPlugAdoptation.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { connect } from 'react-redux';
import SearchResultBar from '../../Components/SearchResultBar/SearchResultBar';
import NavBar from '../../Components/NavBar/NavBar';
import { pushPlayer, pushTrainer } from '../../redux-store/TeamReducer';
import SearchPagePlug from '../../Components/SearchPagePlug/SearchPagePlug';

const MyTeam = ({ users, pushPlayer, team, role, pushTrainer }) => {
  const [usersFiltered, setUsersFiltered] = useState(users);
  return (
    <div className="page_s">
      <NavBar role={role} />
      <SearchBar usersFiltered={usersFiltered} users={users} setUsersFiltered={setUsersFiltered} />
      <div className="resultDiv_s">
        {usersFiltered &&
          usersFiltered.map((user) => (
            <SearchResultBar
              name={user.name}
              teamId={team ? team._id : null}
              surname={user.surname}
              age={user.age}
              id={user._id}
              pushPlayer={pushPlayer}
              pushTrainer={pushTrainer}
              img={user.img}
            />
          ))}
        {!usersFiltered || (usersFiltered.length === 0 && <SearchPagePlug />)}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  users: state.userReducer.users,
  team: state.teamReducer.team,
  role: state.userReducer.role,
});

export default connect(mapStateToProps, { pushPlayer, pushTrainer })(MyTeam);
