import React from 'react';
import TheChoiceOfThePlayer from '../TheChoiceOfThePlayer/TheChoiceOfThePlayer';
import HorizontalScrollOnQuestionCheckBox from '../HorizontalScrollOnQuestionCheckBox/HorizontalScrollOnQuestionCheckBox';
import './FooterSecond.css';

const TheFooterOfTheSecond = React.memo(
  ({ setUsers, users, setQuestion, question, teamPlayers, quizeTemplateQuestions }) => {
    return (
      <div className="choiceDivider_fs">
        <div className="butttonHolder_rp fifty_rp">
          <div className="m-b-20_fs">
            <span className="smallTag_fs">Выберите вопрос и участников</span>
          </div>
          <HorizontalScrollOnQuestionCheckBox
            setQuestion={setQuestion}
            question={question}
            quizeTemplateQuestions={quizeTemplateQuestions}
          />
        </div>
        <TheChoiceOfThePlayer setUsers={setUsers} users={users} teamPlayers={teamPlayers} />
      </div>
    );
  },
);

export default TheFooterOfTheSecond;
