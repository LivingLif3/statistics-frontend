import $api from '../http';

const SET_TEAM = 'CREATE_TEAM';
const SET_TEAM_TRAINERS = 'SET_TEAM_TRAINERS';

let initialState = {
  team: null,
  trainers: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      state.team = action.data.data[0];
      return Object.assign({}, state);
    case SET_TEAM_TRAINERS:
      state.trainers = action.data.data;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
};

const createTeamAC = (data) => ({ type: SET_TEAM, data });
const setTeamTrainers = (data) => ({ type: SET_TEAM_TRAINERS, data });

export const createTeam = (name) => async (dispatch) => {
  try {
    const data = await $api.post('/team', { name });
    console.log(data);
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const getTeam = () => async (dispatch) => {
  try {
    const data = await $api.get('/team');
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const getTeamForUser = () => async (dispatch) => {
  try {
    const data = await $api.get('/userTeam');
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const pushPlayer = (userId, teamId) => async (dispatch) => {
  try {
    const data = await $api.post('/pushPlayer', { userId, teamId });
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const pushTrainer = (userId, teamId) => async (dispatch) => {
  try {
    const data = await $api.post('/pushTrainer', { userId, teamId });
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const getTeamTrainers = (team) => async (dispatch) => {
  try {
    let data = await $api.get(`/trainers/${team}`);
    console.log(data);
    dispatch(setTeamTrainers(data));
  } catch (e) {
    console.log(e);
  }
};

export const deletePlayer = (teamId, id) => async (dispatch) => {
  try {
    let data = await $api.post('/player', { teamId, id });
    dispatch(createTeamAC(data));
  } catch (e) {
    console.log(e);
  }
};
