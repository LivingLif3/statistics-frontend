import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { connect } from 'react-redux';
import { checkAuth, getUsers } from './redux-store/UserReducer';
import { useEffect } from 'react';

const App = ({ isAuth, role, checkAuth, getUsers }) => {
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      checkAuth();
      getUsers();
    }
  }, []);
  return (
    <BrowserRouter>
      <AppRouter isAuth={isAuth} role={role} />
    </BrowserRouter>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  role: state.userReducer.role,
});

export default connect(mapStateToProps, { checkAuth, getUsers })(App);
