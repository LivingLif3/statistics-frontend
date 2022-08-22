import React, { useEffect } from 'react';
import './Collection.css';
import './CollectionAdaptation.css';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import ElementOfCollection from '../../Components/ElementOfCollection/ElementOfCollection';
import DailyElementOfCollection from '../../Components/ElementOfCollection/DailyElementOfCollection';
import { connect } from 'react-redux';
import { deleteQuizTemplate, getDailyQuizes } from '../../redux-store/QuizReducer';
import { useNavigate } from 'react-router-dom';
import { CREATE_QUIZ_ROUTE } from '../../utils/consts';

const Colletion = ({ quizTemplates, getDailyQuizes, dailyQuizes, deleteQuizTemplate }) => {
  let navigator = useNavigate();
  useEffect(() => {
    getDailyQuizes();
  }, []);
  console.log(dailyQuizes);
  return (
    <div className="page_cp">
      <StateFormNavBar />
      <div className="body_cp">
        <div className="upperPart_cp">
          <div className="textHolder_cp">
            <p className="text_cp">
              Отредактируйте любой из своих шаблонов в коллекции, удалите ненужные или создайте
              новый
            </p>
          </div>
          <div className="buttonHolder_cp">
            <button className="button_cp" onClick={() => navigator(CREATE_QUIZ_ROUTE)}>
              Новый шаблон
            </button>
          </div>
        </div>
        <div className="deviderHolder_cp">
          <div className="devider_cp"></div>
        </div>
        <div className="dailyQuestions_cp">
          <h1 className="header_cp">Дневные шаблоны</h1>
          <div className="holder_cp">
            {dailyQuizes
              ? dailyQuizes.map((quiz) => (
                  <DailyElementOfCollection
                    key={quiz.template._id}
                    id={quiz.template._id}
                    title={quiz.template.title}
                    text={quiz.template.description}
                    access={quiz.access}
                  />
                ))
              : 'Пусто'}
          </div>
        </div>
        <div className="deviderHolder_cp">
          <div className="devider_cp"></div>
        </div>
        <div className="dailyQuestions_cp">
          <div className="headerHolder_cp">
            <h1 className="header_cp">Пользовательские опросы</h1>
            <button className="button_cp">
              Осталось для отправки сегодня: <span className="sent_cp">5</span>/
              <span className="outOf_cp">5</span>
            </button>
          </div>
          <div className="holder_cp">
            {quizTemplates &&
              quizTemplates.map((quiz) => (
                <ElementOfCollection
                  key={quiz._id}
                  id={quiz._id}
                  title={quiz.title}
                  text={quiz.description}
                  deleteQuizTemplate={deleteQuizTemplate}
                  getDailyQuizes={getDailyQuizes}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  dailyQuizes: state.quizReducer.dailyQuizes,
});

export default connect(mapStateToProps, { getDailyQuizes, deleteQuizTemplate })(Colletion);
