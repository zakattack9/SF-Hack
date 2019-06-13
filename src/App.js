import React from 'react';
import './App.css';
import WeatherRow from './components/WeatherRow';
import HomeMain from './components/HomeMain';
import HomeNotifications from './components/HomeNotifications';

function App() {
  return (
    <div className="App">
      {/* <HomeMain/>
      <HomeNotifications/> */}
      <WeatherRow/>
      {/* <WeatherRow title = "Weather Updates" location = "PHOENIX, AZ" time = "8:03" weatherStatus = "Heavy Flooding" description = "This is a description about weather status which is very important..." /> */}
    </div>
  );
}

export default App;
