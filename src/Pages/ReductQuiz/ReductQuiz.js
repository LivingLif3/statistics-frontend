import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionFormationBarClone from '../../Components/QuestionFormationBar/QuestionFormationBarClone';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { editQuizTemplate } from '../../redux-store/QuizReducer';
import '../CreateQuiz/CreateQuizAdaptation.css';
import '../CreateQuiz/CreateQuiz.css';
import QuestionFormationBar from '../CreateQuiz/QuestionFormationBar';
import $api from '../../http';
import { COLLECTION_ROUTE } from '../../utils/consts';

const ReductQuiz = ({ editQuizTemplate }) => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let location = useLocation();
  let [questions, setQuestions] = useState(null);
  let [error, setError] = useState(false);

  let navigator = useNavigate();

  useEffect(() => {
    $api.get(`/getQuizQuestions/${location.state._id}`).then(({ data }) => {
      setQuestions(data);
    });
  }, []);
  let onEditQuizTemplate = () => {
    if (title.length === 0 || description.length === 0) {
      setError(true);
      return;
    }
    editQuizTemplate(location.state._id, title, description);
    navigator(COLLECTION_ROUTE);
  };
  return (
    <div className="page_owh">
      <StateFormNavBar />
      <div className="body_owh">
        <div className="twoSides_owh">
          <div className="upperText_owh">
            <h1 className="upperTextText_owh">Создай свой собственный опрос</h1>
            <p className="bottomText_owh">
              Создайте свой собственный опрос, добавьте его в коллекцию, чтобы всегда иметь быстрый
              доступ <br />к отправке его пользователям. Название и описание используются для
              формирования карточки опроса
              <br /> в коллекции. С ними будет проще выбирать нужный опрос
            </p>
          </div>
        </div>
        <div className="creation_owh">
          <input
            className="input_owh"
            type="text"
            placeholder={location.state.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="fields_owh">
            <div className="questionField_owh">
              <div className="discTextHolder_owh">
                <h3 className="textDiscription_owh">Добавьте вопросы</h3>
              </div>
              <div className="questionHolder_owh">
                {questions &&
                  questions.length > 0 &&
                  questions.map((question) => (
                    <QuestionFormationBar
                      key={question._id}
                      number={question.number}
                      text={question.text}
                      reduct={true}
                    />
                  ))}
              </div>
            </div>
            <div className="answerField_owh">
              <div className="discTextHolder_owh">
                <h3 className="textDiscription_owh">Выберите способ ответа</h3>
              </div>
              <div className="radioButtonHolder_owh">
                <div class="form_radio_group">
                  <div class="form_radio_group-item">
                    <input
                      id="radio-1"
                      type="radio"
                      name="radio"
                      value="1"
                      checked={!location.state.custom}
                    />
                    <label for="radio-1">От 1 до 10</label>
                  </div>
                  <div class="form_radio_group-item">
                    <input
                      id="radio-2"
                      type="radio"
                      name="radio"
                      value="2"
                      checked={location.state.custom}
                    />
                    <label for="radio-2">Пользовательский</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="discription_owh">
              <div className="discTextHolder_owh">
                <h3 className="textDiscription_owh">Опишите опрос</h3>
              </div>
              <textarea
                className="textArea_owh"
                placeholder={location.state.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          {error && <div style={{ color: 'red', height: 'auto' }}>Заполните все поля!</div>}
          <div className="finalButton_owh">
            <button className="fButton_owh" onClick={onEditQuizTemplate}>
              Сохранить изменения
            </button>
          </div>
        </div>
        <div className="rightSide_owh"></div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { editQuizTemplate })(ReductQuiz);
