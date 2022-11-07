import React, { useEffect, useState } from 'react';
import HolderOfAPlayer from '../HolderOfAPlayer/HolderOfAPlayer';
import { connect } from 'react-redux';
import moment from 'moment';

const BlockOfAnalytics = React.memo(
  ({ teamPlayers, quizesResultsInPeriods, quizeTemplateQuestions }) => {
    let [results, setResults] = useState(null);
    React.useMemo(() => {
      if (quizesResultsInPeriods && quizeTemplateQuestions && teamPlayers) {
        let questionAnswers = [];
        let questionAnswersForUser = [];
        let questions = [];
        let userBuffer = [];
        for (let user of teamPlayers) {
          questions = [];
          for (let question of quizeTemplateQuestions) {
            questionAnswersForUser = [];
            for (let results of quizesResultsInPeriods) {
              questionAnswers = [];
              for (let result of results) {
                if (result.user.toString() === user._id.toString()) {
                  result.answers.forEach((answer) => {
                    if (answer.questionTemplate.toString() === question._id.toString()) {
                      questionAnswers.push({
                        date: moment(result.createdAt).format('YY-MM-DD'),
                        answer: answer.answer,
                      });
                    }
                  });
                }
              }
              if (questionAnswers.length > 0) {
                questionAnswersForUser.push(questionAnswers);
              }
            }
            if (questionAnswersForUser.length > 0) {
              questions.push({
                id: question._id,
                text: question.text,
                questionAnswers: questionAnswersForUser,
              });
            }
          }
          userBuffer.push({
            user: user._id,
            questions: questions,
          });
        }
        setResults(userBuffer);
      }
    }, [quizesResultsInPeriods, teamPlayers, quizeTemplateQuestions]);
    return (
      <div className="otherInfo_rp">
        <div className="upperPart_rp">
          <span className="headerr_rp">Аналитическое представление</span>
        </div>
        {teamPlayers &&
          results &&
          teamPlayers.map((player) => (
            <HolderOfAPlayer
              key={player._id}
              id={player._id}
              name={player.name}
              surname={player.surname}
              quizeTemplateQuestions={quizeTemplateQuestions}
              results={results.filter((result) => result.user.toString() === player._id.toString())}
            />
          ))}
      </div>
    );
  },
);

let mapStateToProps = (state) => ({
  quizesResultsInPeriods: state.quizReducer.quizesResultsInPeriods,
});

export default connect(mapStateToProps, {})(BlockOfAnalytics);
