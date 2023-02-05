import axios from 'axios';
import $api, { API_URL } from '../http';

const SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const GET_USER_DATA = 'GET_USER_DATA';
const SET_CONFIRM_HASH = 'SET_CONFIRM_HASH';
const CLEAR_DATA = 'CLEAR_DATA';
const GET_USERS = 'GET_USERS';
const SET_REGISTRATION_SUCCESS = 'SET_REGISTRATION_SUCCESS';
const SET_AVATAR = 'SET_AVATAR';

const initialState = {
  regError: false,
  loginError: false,
  isAuth: false,
  username: '',
  surname: '',
  lastname: '',
  email: '',
  role: null,
  confirmHash: null,
  img: null,
  team: null,
  id: null,
  users: null,
  age: null,
  weight: null,
  height: null,
  registrationSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_ERROR:
      state.regError = true;
      return { ...state };
    case SET_LOGIN_ERROR:
      state.loginError = true;
      return { ...state };
    case GET_USER_DATA:
      state.isAuth = true;
      state.username = action.data.name;
      state.surname = action.data.surname;
      state.lastname = action.data.lastname;
      state.email = action.data.email;
      state.role = action.data.role;
      state.img = action.data.img;
      state.id = action.data.id;
      state.team = action.data.team;
      state.age = action.data.age;
      state.weight = action.data.weight;
      state.height = action.data.height;
      state.loginError = false;
      state.regError = false;
      return { ...state };
    case SET_REGISTRATION_SUCCESS:
      state.registrationSuccess = action.state;
      return { ...state };
    case SET_CONFIRM_HASH:
      state.confirmHash = action.data;
      return { ...state };
    case CLEAR_DATA:
      state.isAuth = false;
      state.username = '';
      state.surname = '';
      state.lastname = '';
      state.email = '';
      state.role = null;
      state.confirmHash = null;
      state.img = null;
      state.id = null;
      state.team = null;
      state.age = null;
      state.weight = null;
      state.height = null;
      return { ...state };
    case GET_USERS:
      state.users = action.data;
      return { ...state };
    case SET_AVATAR:
      state.img = action.data.data.img;
      return { ...state };
    default:
      return { ...state };
  }
};

const setLoginError = () => ({ type: SET_LOGIN_ERROR });
const setRegError = () => ({ type: SET_REGISTRATION_ERROR });
const getUserDataAC = (data) => ({ type: GET_USER_DATA, data });
const setConfirmHashAC = (data) => ({ type: SET_CONFIRM_HASH, data });
const clearDataAC = () => ({ type: CLEAR_DATA });
const getUsersAC = (data) => ({ type: GET_USERS, data });
const setRegistrationSuccessAC = (state) => ({ type: SET_REGISTRATION_SUCCESS, state });
const setImage = (data) => ({ type: SET_AVATAR, data });

export const setConfirmHash = (hash) => (dispatch) => {
  dispatch(setConfirmHashAC(hash));
};

export const setRegistrationSuccess = (state) => (dispatch) => {
  dispatch(setRegistrationSuccessAC(state));
};

export const getUserData = (name, surname, lastname, email, password) => async (dispatch) => {
  try {
    const data = await $api.post('/registration', { name, surname, lastname, email, password });
    if (!data) {
      return dispatch(setRegError());
    }
    window.localStorage.setItem('token', data.data.accessToken);
    dispatch(getUserDataAC(data.data.user));
    dispatch(setRegistrationSuccessAC(true));
  } catch (e) {
    console.log(e);
  }
};

export const setUserData = (email, password) => async (dispatch) => {
  try {
    const data = await $api.post('/login', { email, password });
    if (!data) {
      return dispatch(setLoginError());
    }
    window.localStorage.setItem('token', data.data.accessToken);
    dispatch(getUserDataAC(data.data.user));
  } catch (e) {
    console.log(e);
  }
};

export const setSocketData = (data) => async (dispatch) => {
  dispatch(getUserDataAC(data));
};

export const checkAuth = () => (dispatch) => {
  try {
    axios.get(`${API_URL}/refresh`, { withCredentials: true }).then(({ data }) => {
      window.localStorage.setItem('token', data.accessToken);
      dispatch(getUserDataAC(data.user));
    });
  } catch (e) {
    console.log(e.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    let data = await $api.post('/logout');
    dispatch(clearDataAC());
    window.localStorage.removeItem('token');
  } catch (e) {
    console.log(e);
  }
};

export const uploadImg = (img) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('img', img);
    const data = await $api.post('/uploadImg', formData);
    dispatch(getUserDataAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const deleteImg = () => async (dispatch) => {
  try {
    const data = await $api.delete('/deleteImg');
    dispatch(getUserDataAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const createTeam = (nameOfTeam) => async (dispatch) => {
  try {
    const data = await $api.post('/create', { name: nameOfTeam });
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const data = await $api.get('/user');
    dispatch(getUsersAC(data.data));
  } catch (e) {
    console.log(e);
  }
};

export const updateData = (date, height, weight) => async (dispatch) => {
  try {
    const data = await $api.post('/updateInfo', { date, height, weight });
    dispatch(getUserDataAC(data.data));
  } catch (e) {
    console.log(e);
  }
};

export const updateAvatar = (img) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('img', img);
    const data = await $api.post('/uploadImage', formData);
    dispatch(setImage(data));
  } catch (e) {
    console.log(e);
  }
};
