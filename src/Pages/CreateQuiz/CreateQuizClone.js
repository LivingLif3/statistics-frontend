import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import QuestionFormationBarClone from '../../Components/QuestionFormationBar/QuestionFormationBarClone';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { createTemplateQuiz } from '../../redux-store/QuizReducer';
import BarInput from './BarInput';
import './CreateQuiz.css';
import QuestionFormationBar from './QuestionFormationBar';
// import StateFormNavBar from "./stateFormNavBar";

const CreateQuiz = ({ createTemplateQuiz }) => {
  let [questions, setQuestions] = useState([]);
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [custom, setCustom] = useState(false);
  let onCreate = () => {
    if (title.length > 0 && description.length > 0 && questions.length > 0) {
      createTemplateQuiz(title, questions, description, custom);
      setTitle('');
      setDescription('');
      setQuestions([]);
    }
  };
  useEffect(() => {
    console.log(custom);
  }, [custom]);
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
            placeholder="Название опроса"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="fields_owh">
            <div className="questionField_owh">
              <div className="discTextHolder_owh">
                <h3 className="textDiscription_owh">Добавьте вопросы</h3>
              </div>
              <div className="questionHolder_owh">
                <QuestionFormationBarClone questions={questions} setQuestions={setQuestions} />
                {questions.length > 0 &&
                  questions.map((question) => (
                    <QuestionFormationBar
                      number={question.number}
                      text={question.text}
                      questions={questions}
                      setQuestions={setQuestions}
                    />
                  ))}
                {/* {array.map((number) => (
                  <QuestionFormationBar
                    key={number}
                    click={click}
                    number={number}
                    questions={questions}
                  />
                ))} */}
              </div>
              <div className="buttonHolder_owh">
                {/* <button
                  className="plusButton_owh">
                  +
                </button> */}
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
                      checked={!custom}
                      onChange={() => setCustom(!custom)}
                    />
                    <label for="radio-1">От 1 до 10</label>
                  </div>
                  <div class="form_radio_group-item">
                    <input
                      id="radio-2"
                      type="radio"
                      name="radio"
                      value="2"
                      checked={custom}
                      onChange={() => setCustom(!custom)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите описание Вашего опроса..."
              />
            </div>
          </div>
          <div className="finalButton_owh">
            <button className="fButton_owh" onClick={onCreate}>
              Добавить в коллекцию
            </button>
          </div>
        </div>

        <div className="rightSide_owh"></div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createTemplateQuiz })(CreateQuiz);
