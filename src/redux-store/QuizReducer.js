import $api from '../http';

const CREATE_TEMPLATE_QUIZ = 'CREATE_TEMPLATE_QUIZ';
const SET_QUIZ_TEMPLATES = 'SET_QUIZ_TEMPLATES';
const SET_TEAM_PLAYERS = 'SET_TEAM_PLAYERS';
const SET_DAILY_TEMPLATES = 'SET_CREATED_DAILY_TEMPLATES';
const SET_QUIZES_FOR_ME = 'SET_QUIZES_FOR_ME';
const SET_QUIZE_QUESTIONS = 'SET_QUIZE_QUESTIONS';
const SET_QUIZES_RESULTS_IN_PERIOD = 'SET_QUIZES_RESULTS_IN_PERIOD';
const SET_QUIZ_TEMPLATE_QUESTIONS = 'SET_QUIZ_TEMPLATE_QUESTIONS';
const SET_CUSTOM_QUIZES_RESULTS_IN_PERIOD = 'SET_CUSTOM_QUIZES_RESULTS_IN_PERIOD';
const SET_AVAILABLE_OBJECT = 'SET_AVAILABLE_OBJECT';

let initialState = {
  templateQuiz: null,
  quizTemplates: null,
  teamPlayers: null,
  dailyQuizes: null,
  quizesForMe: null,
  quizeQuestions: null,
  quizesResultsInPeriods: null,
  quizeTemplateQuestions: null,
  quizesCustomResultsInPeriods: null,
  availableObject: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEMPLATE_QUIZ:
      state.templateQuiz = action.data.data;
      return Object.assign({}, state);
    case SET_QUIZ_TEMPLATES:
      state.quizTemplates = action.data.data;
      return Object.assign({}, state);
    case SET_TEAM_PLAYERS:
      state.teamPlayers = action.data.data;
      return Object.assign({}, state);
    case SET_DAILY_TEMPLATES:
      state.dailyQuizes = action.data.data;
      return Object.assign({}, state);
    case SET_QUIZES_FOR_ME:
      state.quizesForMe = action.data.data;
      return Object.assign({}, state);
    case SET_QUIZE_QUESTIONS:
      state.quizeQuestions = action.data.data;
      return Object.assign({}, state);
    case SET_QUIZES_RESULTS_IN_PERIOD:
      state.quizesResultsInPeriods = action.data.data;
      return Object.assign({}, state);
    case SET_QUIZ_TEMPLATE_QUESTIONS:
      state.quizeTemplateQuestions = action.data.data;
      return Object.assign({}, state);
    case SET_CUSTOM_QUIZES_RESULTS_IN_PERIOD:
      state.quizesCustomResultsInPeriods = action.data.data;
      return Object.assign({}, state);
    case SET_AVAILABLE_OBJECT:
      state.availableObject = action.data.data;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
};

const createTemplateQuizAC = (data) => ({ type: CREATE_TEMPLATE_QUIZ, data });
const setQuizTemplates = (data) => ({ type: SET_QUIZ_TEMPLATES, data });
const setAvailableObject = (data) => ({ type: SET_AVAILABLE_OBJECT, data });
const setTeamPlayers = (data) => ({ type: SET_TEAM_PLAYERS, data });
const setDailyTemplates = (data) => ({ type: SET_DAILY_TEMPLATES, data });
const setQuizesForMe = (data) => ({ type: SET_QUIZES_FOR_ME, data });
const setQuizeQuestions = (data) => ({ type: SET_QUIZE_QUESTIONS, data });
const setQuizesResultsInPeriod = (data) => ({ type: SET_QUIZES_RESULTS_IN_PERIOD, data });
const setQuizeTemplateQuestions = (data) => ({ type: SET_QUIZ_TEMPLATE_QUESTIONS, data });
const setQuizesCustomResultsInPeriod = (data) => ({
  type: SET_CUSTOM_QUIZES_RESULTS_IN_PERIOD,
  data,
});

export const createTemplateQuiz = (title, questions, description, custom) => async (dispatch) => {
  try {
    const data = await $api.post('/createQuizTemplate', { title, questions, description, custom });
    dispatch(createTemplateQuizAC(data));
  } catch (e) {
    console.log(e);
  }
};

export const getQuizTemplates = () => async (dispatch) => {
  try {
    const data = await $api.get('/getQuizes');
    dispatch(setQuizTemplates(data));
  } catch (e) {
    console.log(e);
  }
};

export const getTeamPlayers = (team) => async (dispatch) => {
  try {
    let data = await $api.get(`/team/${team}`);
    dispatch(setTeamPlayers(data));
  } catch (e) {
    console.log(e);
  }
};

export const getDailyQuizes = () => async (dispatch) => {
  try {
    let data = await $api.get('/createdDailyTemplates');
    dispatch(setDailyTemplates(data));
  } catch (e) {
    console.log(e);
  }
};

export const getQuizesForMe = () => async (dispatch) => {
  try {
    let data = await $api.get('/quizes');
    dispatch(setQuizesForMe(data));
  } catch (e) {
    console.log(e);
  }
};

export const getQuizQuestions = (quiz) => async (dispatch) => {
  try {
    let data = await $api.get(`/quizeQuestions/${quiz}`);
    dispatch(setQuizeQuestions(data));
  } catch (e) {
    console.log(e);
  }
};

export const sendAnswer = (quiz, answers, custom) => async (dispatch) => {
  try {
    let data;
    if (custom) {
      data = await $api.post('/answerCustom', { quiz, answers });
    } else {
      data = await $api.post('/answer', { quiz, answers });
    }
    dispatch(setQuizesForMe(data));
    dispatch(setQuizeQuestions([]));
  } catch (e) {
    console.log(e);
  }
};

export const getTemplateResultsForPeriod = (template, fromDate, toDate) => async (dispatch) => {
  try {
    let data = await $api.post('/findInterval', { template, fromDate, toDate });
    dispatch(setQuizesResultsInPeriod(data));
  } catch (e) {
    console.log(e);
  }
};

export const getTemplateCustomResultsForPeriod =
  (template, fromDate, toDate) => async (dispatch) => {
    try {
      let data = await $api.post('/findCustomInterval', { template, fromDate, toDate });
      dispatch(setQuizesCustomResultsInPeriod(data));
    } catch (e) {
      console.log(e);
    }
  };

export const getTemplateQusetions = (template) => async (dispatch) => {
  try {
    let data = await $api.get(`/getQuizQuestions/${template}`);
    dispatch(setQuizeTemplateQuestions(data));
  } catch (e) {
    console.log(e);
  }
};

export const deleteQuizTemplate = (template) => async (dispatch) => {
  try {
    console.log(template);
    let data = await $api.delete(`/quizeTemplate/${template}`);
    dispatch(setQuizTemplates(data));
  } catch (e) {
    console.log(e);
  }
};

export const stopDailyQuiz = (access) => async (dispatch) => {
  try {
    let data = await $api.post('/stopRepeat', { access });
    dispatch(setDailyTemplates(data));
  } catch (e) {
    console.log(e);
  }
};

export const editQuizTemplate = (id, title, description) => async (dispatch) => {
  try {
    let data = await $api.post('/editQuiz', { id, title, description });
    dispatch(setQuizTemplates(data));
  } catch (e) {
    console.log(e);
  }
};

export const getAvailableInfo = () => async (dispatch) => {
  try {
    let data = await $api.get('/availableInfo');
    dispatch(setAvailableObject(data));
  } catch (e) {
    console.log(e);
  }
};
