import React from 'react';
import './App.css';
import HomeMain from './components/HomeMain';
import HomeNotifications from './components/HomeNotifications';
import ReportedOutagesRow from './components/ReportedOutagesRow';
import WeatherUpdateRows from './components/WeatherUpdateRows';

function App() {
  return (
    <div className="App">
      {/* <HomeMain/>
      <HomeNotifications/> */}
      {/* <ReportedOutagesRow/> */}
      <WeatherUpdateRows/>
    </div>
  );  
}

export default App;