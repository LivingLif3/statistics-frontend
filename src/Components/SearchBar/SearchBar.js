import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';

const SearchBar = ({ usersFiltered, setUsersFiltered, users }) => {
  // const users = [
  //     {
  //         name: 'Nikita',
  //         surname: 'Letko',
  //         lastname: 'Yrievich',
  //         email: 'nikita@gmail.com'
  //     },
  //     {
  //         name: 'Sasha',
  //         surname: 'Letko',
  //         lastname: 'Yrievich',
  //         email: 'alexletko@gmail.com'
  //     },
  //     {
  //         name: 'Dima',
  //         surname: 'Zhitko',
  //         lastname: 'Valerievich',
  //         email: 'dima@gmail.com'
  //     }
  // ]
  const [inputValue, setInputValue] = useState('');
  const filterUsers = () => {
    if (!inputValue) {
      return users;
    }
    return users.filter((user) => {
      return user.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  };

  useEffect(() => {
    const filteredUsers = filterUsers();
    setUsersFiltered(filteredUsers);
  }, [inputValue]);
  return (
    <div className="place_s">
      <div className="searcher_s">
        <div className="container_s">
          <input
            placeholder="Поиск..."
            className="js-search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(SearchBar);
