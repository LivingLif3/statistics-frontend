import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import quizReducer from "./QuizReducer";
import teamReducer from "./TeamReducer";
import userReducer from "./UserReducer";

const reducers = combineReducers({
    userReducer,
    quizReducer,
    teamReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store