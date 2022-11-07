import React, { useEffect, useState } from 'react';
import BlockOfAnalytics from '../../Components/BlockOfAnalytics/BlockOfAnalytics';
import BlockOfIndividual from '../../Components/BlockOfIndividual/BlockOfIndividual';
import BlockOfTeam from '../../Components/BlockOfTeam/BlockOfTeam';
import ClearTemplateForGraph from '../../Components/ClearTemplateForGraph/ClearTemplateForGraph';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { connect } from 'react-redux';
import './ResultPage.css';
import { getTemplateQusetions, getTemplateResultsForPeriod } from '../../redux-store/QuizReducer';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { CUSTOM_RESULTS_ROUTE } from '../../utils/consts';

const ResultPage = ({
  quizTemplates,
  getTemplateResultsForPeriod,
  quizesResultsInPeriods,
  getTemplateQusetions,
  quizeTemplateQuestions,
  teamPlayers,
}) => {
  let navigator = useNavigate();
  const [template, setTemplate] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [dataToTeamGraph, setDataToTeamGraph] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [selectedQuestionData, setSelectedQuestionData] = useState([]);
  const [allQuestions, setAllQuestions] = useState(true);
  let onGetTemplateResultsForPeriod = () => {
    if (template && fromDate && toDate) {
      getTemplateResultsForPeriod(template, fromDate, toDate);
      getTemplateQusetions(template);
    }
  };
  React.useMemo(() => {
    let resBuffer = [];
    if (selectedQuestion && quizesResultsInPeriods) {
      for (let i = 0; i < quizesResultsInPeriods.length; i++) {
        let avMarkForQuestion = 0;
        for (let j = 0; j < quizesResultsInPeriods[i].length; j++) {
          quizesResultsInPeriods[i][j].answers.forEach((element) => {
            if (element.questionTemplate.toString() === selectedQuestion.toString()) {
              avMarkForQuestion += element.answer;
            }
          });
        }
        avMarkForQuestion /= quizesResultsInPeriods[i].length;
        resBuffer.push({
          avMarkForQuestion,
          date: quizesResultsInPeriods[i][0]
            ? moment(quizesResultsInPeriods[i][0].createdAt).format('YYYY-MM-DD')
            : null,
        });
      }
    }
    setSelectedQuestionData(resBuffer);
  }, [selectedQuestion]);
  React.useMemo(() => {
    let resBuffer = [];
    if (quizesResultsInPeriods) {
      for (let i = 0; i < quizesResultsInPeriods.length; i++) {
        let avMarkForDay = 0;
        for (let j = 0; j < quizesResultsInPeriods[i].length; j++) {
          avMarkForDay += quizesResultsInPeriods[i][j].avarageAnswer;
        }
        avMarkForDay /= quizesResultsInPeriods[i].length;
        resBuffer.push({
          avMarkForDay,
          date: quizesResultsInPeriods[i][0]
            ? moment(quizesResultsInPeriods[i][0].createdAt).format('YYYY-MM-DD')
            : null,
        });
      }
    }
    setDataToTeamGraph(resBuffer);
  }, [quizesResultsInPeriods]);
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="page_rp">
      <StateFormNavBar />
      <div className="body_rp">
        <div className="settingsOfChoice_rp">
          <div className="leftSide_rp">
            <div className="collection_rp">
              <div className="collectionHeader_rp">
                <span className="collectionHeaderTex_rp">Выберите опрос из коллекции</span>
              </div>
              <div className="collectionBody_rp">
                {quizTemplates &&
                  quizTemplates.map((quiz) => {
                    if (!quiz.custom) {
                      return (
                        <ClearTemplateForGraph
                          key={quiz._id}
                          id={quiz._id}
                          setTemplate={setTemplate}
                          template={template}
                          title={quiz.title}
                          text={quiz.description}
                        />
                      );
                    }
                  })}
              </div>
            </div>
          </div>
          <div className="rightSide_rp">
            <div className="customSenserDiv_rp">
              <button className="customQPage_rp" onClick={() => navigator(CUSTOM_RESULTS_ROUTE)}>
                Пользовательские опросы
              </button>
            </div>
            <div className="rightUpperPart_rp">
              <h2 className="upperPartText_rp">Укажите временной срез</h2>
              <div className="timeHolder_rp">
                <div className="itemOne_rp">
                  <input
                    className="input2_rp"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="itemOne_rp">
                  <input
                    className="input2_rp"
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="rightLowerPart_rp">
              <div className="acceptionButton_rp">
                <button className="accept_rp" onClick={onGetTemplateResultsForPeriod}>
                  Результат
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="textBelow_rp">
          <p className="textBelowText_rp">
            Выберите опрос, результаты которого необходимо просмотреть. Укажите временной срез в
            пределах 25 дней. Итоговый результат представлен <br></br>
            как в виде графиков, так и в аналитическом виде
          </p>
        </div>
      </div>
      <section className="section_rp">
        <BlockOfTeam
          dataToTeamGraph={dataToTeamGraph}
          quizeTemplateQuestions={quizeTemplateQuestions}
          setAllQuestions={setAllQuestions}
          allQuestions={allQuestions}
          setSelectedQuestion={setSelectedQuestion}
          selectedQuestion={selectedQuestion}
          selectedQuestionData={selectedQuestionData}
          getRandomColor={getRandomColor}
        />
        <BlockOfIndividual
          quizesResultsInPeriods={quizesResultsInPeriods}
          teamPlayers={teamPlayers}
          quizeTemplateQuestions={quizeTemplateQuestions}
          getRandomColor={getRandomColor}
        />
        <BlockOfAnalytics
          teamPlayers={teamPlayers}
          quizeTemplateQuestions={quizeTemplateQuestions}
        />
      </section>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  quizesResultsInPeriods: state.quizReducer.quizesResultsInPeriods,
  quizeTemplateQuestions: state.quizReducer.quizeTemplateQuestions,
  teamPlayers: state.quizReducer.teamPlayers,
});

export default connect(mapStateToProps, { getTemplateResultsForPeriod, getTemplateQusetions })(
  ResultPage,
);
