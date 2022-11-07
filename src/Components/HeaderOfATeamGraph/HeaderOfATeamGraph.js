import React from 'react';
import './TeamGraph.css';

const HeaderOfATeamGraph = React.memo(({ dataToTeamGraph }) => {
  console.log(dataToTeamGraph, 'dataToTeamGraph');
  let mark = 0;
  if (dataToTeamGraph) {
    dataToTeamGraph.forEach((element) => {
      mark += element.avMarkForDay;
    });
    mark /= dataToTeamGraph.length;
  }
  return (
    <div className="upperPart_rp">
      <span className="headerr_rp">График средних</span>
      <div className="spanHolder_rp">
        <span className="tagName_rp">За срез:</span>
        <span className="number_rp">{mark ? mark.toFixed(3) : '0.000'}</span>
      </div>
    </div>
  );
});

export default HeaderOfATeamGraph;
