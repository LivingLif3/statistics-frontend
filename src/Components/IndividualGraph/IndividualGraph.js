import React, { useEffect, useState } from 'react';
import './IndividualGraph.css';
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

const IndividualGraph = ({ graphs, teamPlayers, getRandomColor }) => {
  const [labels, setLabels] = useState(null);
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  let dataCreator = (user, questionAnswers) => {
    return {
      label: teamPlayers.map((player) => {
        if (player._id.toString() === user.toString()) {
          return `${player.surname} ${player.name}`;
        }
      }),
      data: questionAnswers.map((answer) => answer.answer),
      fill: true,
      backgroundColor: [getRandomColor()],
      borderColor: [getRandomColor()],
      pointBorderColor: '#8884d8',
      pointBorderWidth: 4,
      pointRadius: 4,
      tension: 0.4,
    };
  };
  useEffect(() => {
    if (graphs.length > 0) {
      let maxLength = 0;
      for (let graph of graphs) {
        if (graph.questionAnswers.length > maxLength) {
          maxLength = graph.questionAnswers.length;
          setLabels(graph);
        }
      }
    }
    console.log(graphs);
  }, [graphs]);
  const data = {
    labels: labels ? labels.questionAnswers.map((answer) => answer.date) : [],
    datasets:
      graphs.length > 0
        ? graphs.map((graph) => dataCreator(graph.user, graph.questionAnswers))
        : [],
  };
  // const data = {
  //   labels: allQuestions
  //     ? dataToTeamGraph.map((item) => item.date)
  //     : selectedQuestionData.map((item) => item.date),
  //   datasets: [
  //     {
  //       label: 'Iphone sales',
  //       data: allQuestions
  //         ? dataToTeamGraph.map((item) => item.avMarkForDay)
  //         : selectedQuestionData.map((item) => item.avMarkForQuestion),
  //       fill: true,
  //       backgroundColor: ['red'],
  //       borderColor: [getRandomColor()],
  //       pointBorderColor: '#8884d8',
  //       pointBorderWidth: 4,
  //       pointRadius: 4,
  //       tension: 0.4,
  //     },
  //   ],
  // };
  return <Line data={data} height={1000} width={2000} options={options} />;
};

export default IndividualGraph;
