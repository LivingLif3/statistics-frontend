import React, { useEffect, useState } from 'react';
// import AnswerInput from "./newComponents/answerInput";
// import AnswerKeabord_1To10 from "./newComponents/answerKeyboard_new";
// import AnswerSectionPlug from "./newComponents/answerSectionPlug";
// import NamePlacePlug from "./newComponents/namePlug_new";
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import './New.css';
import './NewAdoptation.css';
import NameHolder from '../../Components/NameHolder/NameHolder';
import { connect } from 'react-redux';
import { getQuizesForMe, getQuizQuestions, sendAnswer } from '../../redux-store/QuizReducer';
import AnswerSection from '../../Components/AnswerSection/AnswerSection';
import NamePlacePlug from '../../Components/NamePlacePlug/NamePlacePlug';
import PlayersStateFormNavBar from '../../Components/PlayersStateFormNavBar/PlayersStateFormNavBar';

const New = ({
  getQuizesForMe,
  quizesForMe,
  getQuizQuestions,
  quizeQuestions,
  sendAnswer,
  role,
}) => {
  let [selectedQuiz, setSelectedQuiz] = useState(null);
  let [answers, setAnswers] = useState([]);
  let [selectedQuizObject, setSelectedQuizObject] = useState(null);
  let answersTest = [];
  useEffect(() => {
    getQuizesForMe();
  }, []);
  useEffect(() => {
    if (quizeQuestions) {
      setAnswers(
        quizeQuestions.map((quizQuestion) => ({ question: quizQuestion._id, answer: null })),
      );
    }
  }, [quizeQuestions]);
  useEffect(() => {
    if (selectedQuiz) {
      getQuizQuestions(selectedQuiz);
    }
  }, [selectedQuiz]);
  return (
    <div className="page_n">
      {role === 'TRAINER' ? <StateFormNavBar /> : <PlayersStateFormNavBar />}
      <div className="body_n">
        <div className="choiceSection_n">
          <div className="headerOfSection_n">
            <h2 className="textOfTheHeader_n">Выберите один из опросов</h2>
          </div>
          <div className="choiceHolder_n">
            {quizesForMe &&
              quizesForMe.map((quiz) => (
                <NameHolder
                  title={quiz.title}
                  id={quiz._id}
                  quiz={quiz}
                  setSelectedQuizObject={setSelectedQuizObject}
                  setSelectedQuiz={setSelectedQuiz}
                />
              ))}
            {quizesForMe && quizesForMe.length === 0 && <NamePlacePlug />}
            {/* <NamePlacePlug/> */}
          </div>
        </div>
        <div className="deviderHolder_n">
          <div className="devider_n"></div>
        </div>
        <AnswerSection
          quizeQuestions={quizeQuestions}
          answers={answers}
          setAnswers={setAnswers}
          answersTest={answersTest}
          sendAnswer={sendAnswer}
          selectedQuiz={selectedQuiz}
          selectedQuizObject={selectedQuizObject}
          setSelectedQuiz={setSelectedQuiz}
        />
        {/* <div className="answerSection_n">
          {quizeQuestions &&
            quizeQuestions.map((question) => (
              <QuestionBar
                id={question._id}
                text={question.text}
                answers={answers}
                submit={submit}
                setAnswers={setAnswers}
                answersTest={answersTest}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizesForMe: state.quizReducer.quizesForMe,
  quizeQuestions: state.quizReducer.quizeQuestions,
  role: state.userReducer.role,
});

export default connect(mapStateToProps, { getQuizesForMe, getQuizQuestions, sendAnswer })(New);
