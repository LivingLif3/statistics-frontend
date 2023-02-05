import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { connect } from 'react-redux';
import { checkAuth, getUsers, setSocketData } from './redux-store/UserReducer';
import { useEffect } from 'react';

const App = ({ isAuth, role, checkAuth, getUsers, id, setSocketData }) => {
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      checkAuth();
      getUsers();
    }
  }, []);

  let socket = new WebSocket('ws://localhost:8001');

  useEffect(() => {
    if (socket) {
      if (id) {
        socket.onopen = () => {
          console.log('RRWEQ', id);
          socket.send(
            JSON.stringify({
              id,
            }),
          );
        };
      }
    }
  }, [id]);
  socket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    switch (data.type) {
      case 'PUSH':
        console.log(data);
        setSocketData(data.data);
    }
  };
  return (
    <BrowserRouter>
      <AppRouter isAuth={isAuth} role={role} />
    </BrowserRouter>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  role: state.userReducer.role,
  id: state.userReducer.id,
});

export default connect(mapStateToProps, { checkAuth, getUsers, setSocketData })(App);
