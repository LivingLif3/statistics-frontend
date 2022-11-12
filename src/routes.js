import Paint from './Components/Paint';
import UserFinder from './Components/UserFinder';
import Authorization from './Pages/Authorization/Authorization';
import Cabinet from './Pages/Cabinet/Cabinet';
import Colletion from './Pages/Collection/Collection';
import NewCollection from './Pages/Collection/NewCollection';
import CreateQuiz from './Pages/CreateQuiz/CreateQuiz';
import CreateQuizClone from './Pages/CreateQuiz/CreateQuizClone';
import CustomResultPage from './Pages/CustomResultPage/CustomResultPage';
import Main from './Pages/Main/Main';
import MyTeam from './Pages/MyTeam/MyTeam';
import New from './Pages/New/New';
import ReductQuiz from './Pages/ReductQuiz/ReductQuiz';
import RefreshPassword from './Pages/RefreshPassword/RefreshPassword';
import Registration from './Pages/Registration/Registration';
import ResultPage from './Pages/ResultPage/ResultPage';
import NewSendQuiz from './Pages/SendQuiz/NewSendQuiz';
import SendQuiz from './Pages/SendQuiz/SendQuiz';
import Shop from './Pages/Shop/Shop';
import Soon from './Pages/Soon/Soon';
import Support from './Pages/Support/Support';
import NewTeamPage from './Pages/TeamPage/NewTeamPage';
import TeamPage from './Pages/TeamPage/TeamPage';
import {
  CABINET_ROUTE,
  COLLECTION_ROUTE,
  CREATE_QUIZ_ROUTE,
  CUSTOM_RESULTS_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  MY_TEAM_ROUTE,
  NEW_ROUTE,
  REDUCT_QUIZ,
  REFRESH_PASSWORD_ROUTE,
  REGISTRATION_ROUTE,
  RESULTS_ROUTE,
  SEND_QUIZ_ROUTE,
  SHOP_ROUTE,
  SOON_ROUTE,
  SUPPORT_ROUTE,
  TEAM_ROUTE,
  TEST_PAINT,
} from './utils/consts';

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration />,
  },
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Authorization />,
  },
  {
    path: SUPPORT_ROUTE, //private
    Component: <Support />,
  },
  {
    path: SHOP_ROUTE, //private
    Component: <Shop />,
  },
  {
    path: TEST_PAINT,
    Component: <Paint />,
  },
  {
    path: REFRESH_PASSWORD_ROUTE,
    Component: <RefreshPassword />,
  },
  {
    path: SOON_ROUTE,
    Component: <Soon />,
  },
];

export const trainerRoutes = [
  {
    path: MY_TEAM_ROUTE,
    Component: <MyTeam />,
  },
  // {
  //   path: CREATE_QUIZ_ROUTE,
  //   Component: <CreateQuiz />,
  // },
  {
    path: CUSTOM_RESULTS_ROUTE,
    Component: <CustomResultPage />,
  },
  {
    path: CREATE_QUIZ_ROUTE,
    Component: <CreateQuizClone />,
  },
  {
    path: SEND_QUIZ_ROUTE,
    Component: <NewSendQuiz />,
  },
  {
    path: TEAM_ROUTE,
    Component: <NewTeamPage />,
  },
  {
    path: CABINET_ROUTE,
    Component: <Cabinet />,
  },
  {
    path: COLLECTION_ROUTE,
    Component: <NewCollection />,
  },
  // {
  //   path: COLLECTION_ROUTE,
  //   Component: <Colletion />,
  // },
  {
    path: NEW_ROUTE,
    Component: <New />,
  },
  {
    path: RESULTS_ROUTE,
    Component: <ResultPage />,
  },
  {
    path: REDUCT_QUIZ,
    Component: <ReductQuiz />,
  },
];

export const userRoutes = [
  {
    path: TEAM_ROUTE,
    Component: <NewTeamPage />,
  },
  {
    path: CABINET_ROUTE,
    Component: <Cabinet />,
  },
  {
    path: MY_TEAM_ROUTE,
    Component: <MyTeam />,
  },
  {
    path: NEW_ROUTE,
    Component: <New />,
  },
];
