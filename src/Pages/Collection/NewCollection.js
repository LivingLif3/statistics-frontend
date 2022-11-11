import React, { useEffect } from 'react';
import './NewCollection.scss';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import ElementOfCollection from '../../Components/ElementOfCollection/ElementOfCollection';
import DailyElementOfCollection from '../../Components/ElementOfCollection/DailyElementOfCollection';
import { connect } from 'react-redux';
import {
  deleteQuizTemplate,
  getAvailableInfo,
  getDailyQuizes,
  getQuizTemplates,
  stopDailyQuiz,
} from '../../redux-store/QuizReducer';
import { useNavigate } from 'react-router-dom';
import { CREATE_QUIZ_ROUTE, REDUCT_QUIZ, SEND_QUIZ_ROUTE } from '../../utils/consts';

import {
  FieldBinaryOutlined,
  ClockCircleOutlined,
  CheckSquareOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  EyeInvisibleOutlined,
  FundOutlined,
  ClearOutlined,
  ExclamationCircleOutlined,
  CodepenOutlined,
} from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import SmallQuestionForm from '../../Components/SmallQuestionForm/SmallQuestionForm';
import { useState } from 'react';
import $api, { API_URL } from '../../http';

const Colletion = ({
  quizTemplates,
  getDailyQuizes,
  dailyQuizes,
  deleteQuizTemplate,
  stopDailyQuiz,
  getAvailableInfo,
  availableObject,
  getQuizTemplates,
}) => {
  let navigator = useNavigate();
  let [slideIndex, setSlideIndex] = useState(0);
  let [secondSlideIndex, setSecondSlideIndex] = useState(0);
  let [firstSlideIndex, setFirstSlideIndex] = useState(0);
  let [firstCustom, setFirstCustom] = useState(null);
  let [secondCustom, setSecondCustom] = useState(null);
  let [checkSended, setCheckSended] = useState(false);
  useEffect(() => {
    getDailyQuizes();
    getQuizTemplates();
    getAvailableInfo();
  }, []);
  useEffect(() => {
    if (dailyQuizes && dailyQuizes.length > 0) {
      setFirstCustom(dailyQuizes[0].template.custom);
    }
  }, [dailyQuizes]);
  useEffect(() => {
    if (quizTemplates && quizTemplates.length > 0) {
      setSecondCustom(quizTemplates[0].custom);
    }
  }, [quizTemplates]);
  let onStopDailyQuiz = () => {
    stopDailyQuiz(dailyQuizes[secondSlideIndex].access);
    // if (dailyQuizes && dailyQuizes.length !== 0) {
    //   if (secondSlideIndex > 0 && secondSlideIndex === dailyQuizes.length - 1) {
    //     setSecondSlideIndex(secondSlideIndex - 1);
    //   } else if (secondSlideIndex > 0 && secondSlideIndex < dailyQuizes.length - 1) {
    //     setSecondSlideIndex(secondSlideIndex + 1);
    //   }
    // }
  };
  let onDeleteQuizTemplate = () => {
    deleteQuizTemplate(quizTemplates[slideIndex]._id);
    // if (quizTemplates && quizTemplates.length !== 0) {
    //   if (slideIndex > 0 && slideIndex === quizTemplates.length - 1) {
    //     console.log('here123');
    //     setSlideIndex(slideIndex - 1);
    //   }
    // }
    getDailyQuizes(); //Оптимизировать, чтобы запрос происходил, только если там шаблон являлся и ежедневным опросом
  };
  //Check change custom status
  useEffect(() => {
    //check custom
    console.log('dailyQuizes', dailyQuizes);
    dailyQuizes && dailyQuizes.length && dailyQuizes[secondSlideIndex].template.custom
      ? setSecondCustom(true)
      : setSecondCustom(false);
    quizTemplates && quizTemplates.length && quizTemplates[slideIndex].custom
      ? setFirstCustom(true)
      : setFirstCustom(false);
    //check ready results
  }, [secondSlideIndex, slideIndex]);
  useEffect(() => {
    if (quizTemplates.length > 0) {
      $api
        .post(`${API_URL}/checkSended`, { template: quizTemplates[slideIndex]._id })
        .then(({ data }) => {
          setCheckSended(data);
        });
    }
  }, [slideIndex]);
  useEffect(() => {
    console.log(checkSended, 'checkSended');
    // console.log(firstCustom, 'firstCustom');
  }, [checkSended]);
  return (
    <div className="page_ncp">
      <StateFormNavBar />
      <div className="body_ncp">
        <div className="holder_ncp">
          <div className="radioButtonHolder_ncp">
            <div className="form_radio_group_ncp">
              <div className="form_radio_group-item_ncp">
                <input
                  id="radio-1_ncp"
                  type="radio"
                  name="radio"
                  value="1"
                  checked={firstSlideIndex === 0}
                />
                <label htmlFor="radio-1_ncp">Дневные</label>
              </div>
              <div className="form_radio_group-item_ncp">
                <input
                  id="radio-2_ncp"
                  type="radio"
                  name="radio"
                  value="2"
                  checked={firstSlideIndex === 1}
                />
                <label htmlFor="radio-2_ncp">Обычные</label>
              </div>
            </div>
          </div>
        </div>
        <div className="dividerHolder_ncp">
          <div className="divider_ncp"></div>
        </div>
        <div className="contentHolder">
          <Swiper
            className="collectionSwiper"
            onSlideChange={(e) => setFirstSlideIndex(e.activeIndex)}>
            <SwiperSlide>
              <div className="upperPartOfTheCollectionSwiper">
                <div className="leftInfoHolder">
                  <span>Можно отправить:</span>
                  <span>{availableObject && availableObject.canSendDailyTemplates}</span>
                </div>
                <div className="midInfoHolder">
                  {dailyQuizes && dailyQuizes.length == 0 ? (
                    <span data-tooltip="У Вас нет доступных опросов">
                      <ExclamationCircleOutlined />
                    </span>
                  ) : (
                    <>
                      <span data-tooltip="В цикле отправки">
                        <LoadingOutlined />
                      </span>
                      {secondCustom === false && secondCustom !== null && (
                        <span data-tooltip="Шкала ответов">
                          <CheckSquareOutlined />
                        </span>
                      )}
                      {secondCustom && (
                        <span data-tooltip="Пользовательский ответ">
                          <FontSizeOutlined />
                        </span>
                      )}
                      <span data-tooltip="Ожидается ответ">
                        <ClockCircleOutlined />
                      </span>
                      <span data-tooltip="Количество вопросов">
                        {dailyQuizes &&
                          dailyQuizes[secondSlideIndex] &&
                          dailyQuizes[secondSlideIndex].template.questions.length}
                      </span>
                    </>
                  )}
                </div>
                <div className="rightInfoHolder">
                  <span>Предусмотрено:</span>
                  <span>{availableObject && availableObject.availableTime}</span>
                </div>
              </div>
              <div className="rightMidBar">
                <div className="buttonsSetHolder" onClick={() => onStopDailyQuiz()}>
                  <span>Остановить</span>
                </div>
                <div className="buttonsSetHolder" disabled={true}>
                  <span>Редактировать</span>
                </div>
              </div>
              <div className="leftMidBar">
                <div className="buttonsSetHolder" onClick={() => navigator(CREATE_QUIZ_ROUTE)}>
                  <span>Создать</span>
                </div>
                <div className="buttonsSetHolder" onClick={() => navigator(SEND_QUIZ_ROUTE)}>
                  <span>Отправить</span>
                </div>
              </div>
              {dailyQuizes && dailyQuizes.length === 0 && (
                <div className="textOfNoQuestionsHolder">
                  <span>У Вас нет циклических опросов</span>
                </div>
              )}

              <div className="contentPartOfCollectionSwiper">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  onSlideChange={(e) => setSecondSlideIndex(e.activeIndex)}
                  className="contentSwiperForQForms">
                  {dailyQuizes ? (
                    dailyQuizes.map((quiz) => (
                      <SwiperSlide>
                        <SmallQuestionForm
                          key={quiz.template._id}
                          id={quiz.template._id}
                          title={quiz.template.title}
                          text={quiz.template.description}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div>Пусто</div>
                    </SwiperSlide>
                  )}
                  {/* <SwiperSlide>
                    <SmallQForm />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SmallQForm />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SmallQForm />
                  </SwiperSlide> */}
                </Swiper>
              </div>
              <div className="swiperToTheNextSlideHolder">
                <div className="swiperToTheNextSlide">
                  <span>
                    <DoubleLeftOutlined />
                  </span>
                  <span>
                    <DoubleLeftOutlined />
                  </span>
                  <span>Обычные</span>
                  <span>
                    <DoubleLeftOutlined />
                  </span>
                  <span>
                    <DoubleLeftOutlined />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="upperPartOfTheCollectionSwiper">
                <div className="leftInfoHolder">
                  <span>Можно отправить:</span>
                  <span>{availableObject && availableObject.canSendTemplates}</span>
                </div>
                <div className="midInfoHolder">
                  {/*<span data-tooltip="В цикле отправки"><ClockCircleOutlined/></span>*/}
                  {quizTemplates && quizTemplates.length == 0 ? (
                    <span data-tooltip="У Вас нет доступных опросов">
                      <ExclamationCircleOutlined />
                    </span>
                  ) : (
                    <>
                      {firstCustom === false && firstCustom !== null && (
                        <span data-tooltip="Шкала ответов">
                          <CheckSquareOutlined />
                        </span>
                      )}
                      {firstCustom && (
                        <span data-tooltip="Пользовательский ответ">
                          <FontSizeOutlined />
                        </span>
                      )}
                      {!checkSended && (
                        <span data-tooltip="Никогда не был отправлен">
                          <EyeInvisibleOutlined />
                        </span>
                      )}

                      {/* <span data-tooltip="Результаты доступны">
                    <FundOutlined />
                  </span> */}
                      {/* <span data-tooltip="Удален">
                    <ClearOutlined />
                  </span> */}
                      <span data-tooltip="Количество вопросов">
                        {quizTemplates &&
                          quizTemplates[slideIndex] &&
                          quizTemplates[slideIndex].questions.length}
                      </span>
                    </>
                  )}
                </div>
                <div className="rightInfoHolder">
                  <span>Предусмотрено:</span>
                  <span>{availableObject && availableObject.available}</span>
                </div>
              </div>
              <div className="rightMidBar">
                <div className="buttonsSetHolder" onClick={() => navigator(CREATE_QUIZ_ROUTE)}>
                  <span>Создать</span>
                </div>
                <div className="buttonsSetHolder" onClick={() => navigator(SEND_QUIZ_ROUTE)}>
                  <span>Отправить</span>
                </div>
              </div>
              <div className="leftMidBar">
                <div className="buttonsSetHolder" onClick={onDeleteQuizTemplate}>
                  <span>Удалить</span>
                </div>
                <div
                  className="buttonsSetHolder"
                  onClick={() => navigator(REDUCT_QUIZ, { state: quizTemplates[slideIndex] })}>
                  <span>Редактировать</span>
                </div>
              </div>
              <div className="contentPartOfCollectionSwiper">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  onSlideChange={(e) => setSlideIndex(e.activeIndex)}
                  className="contentSwiperForQForms">
                  {quizTemplates
                    ? quizTemplates.map((quiz) => (
                        <SwiperSlide>
                          <SmallQuestionForm
                            key={quiz._id}
                            id={quiz._id}
                            title={quiz.title}
                            text={quiz.description}
                          />
                        </SwiperSlide>
                      ))
                    : 'Пусто'}
                </Swiper>
              </div>
              <div className="swiperToTheNextSlideHolder">
                <div className="swiperToTheNextSlide">
                  <span>
                    <DoubleRightOutlined />
                  </span>
                  <span>
                    <DoubleRightOutlined />
                  </span>
                  <span>Дневные</span>
                  <span>
                    <DoubleRightOutlined />
                  </span>
                  <span>
                    <DoubleRightOutlined />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  dailyQuizes: state.quizReducer.dailyQuizes,
  availableObject: state.quizReducer.availableObject,
});

export default connect(mapStateToProps, {
  getDailyQuizes,
  deleteQuizTemplate,
  stopDailyQuiz,
  getAvailableInfo,
  getQuizTemplates,
})(Colletion);
