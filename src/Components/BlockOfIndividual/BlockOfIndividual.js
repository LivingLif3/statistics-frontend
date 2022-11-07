import React, { useEffect, useState } from 'react';
import './BlockOfIndividual.css';
import TheFooterOfTheSecond from '../FooterSecond/FooterSecond';
import IndividualGraph from '../IndividualGraph/IndividualGraph';
import IndividualHeader from '../IndividualHeader/IndividualHeader';
import moment from 'moment';

const BlockOfIndividual = React.memo(
  ({ quizesResultsInPeriods, quizeTemplateQuestions, teamPlayers, getRandomColor }) => {
    const [users, setUsers] = useState([]);
    const [question, setQuestion] = useState(null);
    const [graphs, setGraphs] = useState([]);
    React.useMemo(() => {
      if (question && users.length > 0 && quizesResultsInPeriods) {
        let usersResults = [];
        let questionForUserResults = [];
        for (let user of users) {
          questionForUserResults = [];
          quizesResultsInPeriods.forEach((results) => {
            results.forEach((result) => {
              if (result.user.toString() === user.toString()) {
                result.answers.forEach((answer) => {
                  if (answer.questionTemplate.toString() === question.toString()) {
                    questionForUserResults.push({
                      date: moment(result.createdAt).format('YYYY-MM-DD'),
                      answer: answer.answer,
                    });
                  }
                });
              }
            });
          });
          usersResults.push({
            user,
            questionAnswers: questionForUserResults,
          });
        }
        setGraphs(usersResults);
      }
    }, [users, question]);
    return (
      <div className="SecondGraphIndividualDiv_bi">
        <IndividualHeader graphs={graphs} />
        <IndividualGraph
          graphs={graphs}
          teamPlayers={teamPlayers}
          getRandomColor={getRandomColor}
        />
        <TheFooterOfTheSecond
          question={question}
          setQuestion={setQuestion}
          users={users}
          setUsers={setUsers}
          teamPlayers={teamPlayers}
          quizeTemplateQuestions={quizeTemplateQuestions}
        />
      </div>
    );
  },
);

export default BlockOfIndividual;
