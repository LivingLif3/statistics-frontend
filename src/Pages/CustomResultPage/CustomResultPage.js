import React, { useState } from 'react';
// import QForm from '../qForm';
// import BlockOfAnalytics from '../resultComponents/blockOfAnalytics';
// import CustomBlockOfAnalytics from './CblockOfAnalytics';
import StateFormNavBar from '../../Components/StateFormNavBar/StateFormNavBar';
import { connect } from 'react-redux';
import {
  getTemplateQusetions,
  getTemplateCustomResultsForPeriod,
} from '../../redux-store/QuizReducer';
import ClearTemplateForGraph from '../../Components/ClearTemplateForGraph/ClearTemplateForGraph';
import './CustomResultPage.css';
import CustomBlockOfAnalytics from '../../Components/CustomResultsComponents/CustomBlockOfAnalytics';
import { useNavigate } from 'react-router-dom';
import { RESULTS_ROUTE } from '../../utils/consts';

const CustomResultPage = ({
  quizTemplates,
  getTemplateCustomResultsForPeriod,
  getTemplateQusetions,
  quizesCustomResultsInPeriods,
  teamPlayers,
  quizeTemplateQuestions,
}) => {
  let navigator = useNavigate();
  const [template, setTemplate] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  let onGetTemplateResultsForPeriod = () => {
    if (template && fromDate && toDate) {
      getTemplateCustomResultsForPeriod(template, fromDate, toDate);
      getTemplateQusetions(template);
    }
  };
  return (
    <div className="page_crp">
      <StateFormNavBar />
      <div className="body_crp">
        <div className="settingsOfChoice_crp">
          <div className="leftSide_crp">
            <div className="collection_crp">
              <div className="collectionHeader_crp">
                <span className="collectionHeaderTex_crp">Выберите опрос из коллекции</span>
              </div>
              <div className="collectionBody_crp">
                {quizTemplates &&
                  quizTemplates.map((quiz) => {
                    if (quiz.custom) {
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
          <div className="rightSide_crp">
            <div className="customSenserDiv_crp">
              <button className="customQPage_crp" onClick={() => navigator(RESULTS_ROUTE)}>
                Стандартные опросы
              </button>
            </div>
            <div className="rightUpperPart_crp">
              <h2 className="upperPartText_crp">Укажите временной срез</h2>
              <div className="timeHolder_crp">
                <div className="itemOne_crp">
                  <input
                    className="input2_crp"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="itemOne_crp">
                  <input
                    className="input2_crp"
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="rightLowerPart_crp">
              <div className="acceptionButton_crp">
                <button className="accept_crp" onClick={onGetTemplateResultsForPeriod}>
                  Результат
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="textBelow_crp">
          <p className="textBelowText_crp">
            Выберите опрос, результаты которого необходимо просмотреть. Укажите временной срез в
            пределах 25 дней. Итоговый результат представлен <br></br>в аналитическом виде
          </p>
        </div>
      </div>
      <section className="resultPage_crp">
        <CustomBlockOfAnalytics
          teamPlayers={teamPlayers}
          quizesCustomResultsInPeriods={quizesCustomResultsInPeriods}
          quizeTemplateQuestions={quizeTemplateQuestions}
        />
      </section>
    </div>
  );
};

let mapStateToProps = (state) => ({
  quizTemplates: state.quizReducer.quizTemplates,
  quizesCustomResultsInPeriods: state.quizReducer.quizesCustomResultsInPeriods,
  quizeTemplateQuestions: state.quizReducer.quizeTemplateQuestions,
  teamPlayers: state.quizReducer.teamPlayers,
});

export default connect(mapStateToProps, {
  getTemplateCustomResultsForPeriod,
  getTemplateQusetions,
})(CustomResultPage);
