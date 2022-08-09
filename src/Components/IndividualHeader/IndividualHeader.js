import React, { useEffect, useState } from 'react';

const IndividualHeader = ({ graphs }) => {
  let [average, setAverage] = useState(0);
  let avMark = 0;
  let generalLength = 0;
  useEffect(() => {
    if (graphs.length) {
      graphs.forEach((graph) => {
        generalLength += graph.questionAnswers.length;
        console.log(generalLength, 'generalLength');
        graph.questionAnswers.forEach((answer) => {
          avMark += answer.answer;
        });
      });
      setAverage(avMark / generalLength);
    }
  }, [graphs]);
  return (
    <div className="upperPart_rp">
      <span className="headerr_rp">График индивидуальный</span>
      <div className="spanHolder_rp">
        <span className="tagName_rp">За срез:</span>
        <span className="numberInd_rp">{average.toFixed(3)}</span>
      </div>
    </div>
  );
};

export default IndividualHeader;
