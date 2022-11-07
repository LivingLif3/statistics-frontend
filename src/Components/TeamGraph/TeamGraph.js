import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import ChooseToCreateAGraph from "./plugs/chooseTheGraphPlug";
// import FailedToCreateAGraph from "./plugs/graphFailure";
// import ImpossibleToCreateAGraph from "./plugs/noGraphPlug";

const options = {};

const TeamGraph = React.memo(
  ({ dataToTeamGraph, allQuestions, selectedQuestionData, getRandomColor }) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const data = {
      labels: allQuestions
        ? dataToTeamGraph.map((item) => item.date)
        : selectedQuestionData.map((item) => item.date),
      datasets: [
        {
          label: 'Team results',
          data: allQuestions
            ? dataToTeamGraph.map((item) => item.avMarkForDay)
            : selectedQuestionData.map((item) => item.avMarkForQuestion),
          fill: true,
          backgroundColor: ['red'],
          borderColor: [getRandomColor()],
          pointBorderColor: '#8884d8',
          pointBorderWidth: 4,
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    };
    return <Line data={data} height={1000} width={2000} options={options} />;
  },
);

export default TeamGraph;
