// import logo from '../logo.svg';
// import '../App.css';
// import { FaBeer } from 'react-icons/fa';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoarder } from 'components/EventBoard/EventBoard';
import upcomingEvent from '../upcoming-events.json';

export const App = () => {
  return (
    <d>
      {/* <FaBeer /> */}
      <PageTitle title={'24TH CORE Worlds Coalition Conference'} />
      <EventBoarder events={upcomingEvent} />
    </d>
  );
};
// text="24TH CORE Worlds Coalition Conference"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>HI</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
