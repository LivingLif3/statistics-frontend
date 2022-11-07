import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CheckEmail from '../Pages/CheckEmail/CheckEmail';
import { trainerRoutes, userRoutes, publicRoutes } from '../routes';
import { CHECK_EMAIL_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { connect } from 'react-redux';

const AppRouter = ({ isAuth, role }) => {
  return (
    <Routes>
      {isAuth &&
        role === 'TRAINER1' &&
        trainerRoutes.map(({ Component, path }) => (
          <Route key={path} element={Component} path={path} />
        ))}
      {isAuth &&
        role === 'USER' &&
        userRoutes.map(({ Component, path }) => (
          <Route key={path} element={Component} path={path} />
        ))}
      {publicRoutes.map(({ Component, path }) => (
        <Route key={path} element={Component} path={path} />
      ))}
      <Route exact element={<CheckEmail />} path={CHECK_EMAIL_ROUTE + `/:hash`} />
      <Route path={'*'} element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppRouter);
