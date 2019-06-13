import React from 'react';
import './App.css';
import HomeMain from './components/HomeMain';
import HomeNotifications from './components/HomeNotifications';
import ReportedOutagesRow from './components/ReportedOutagesRow';

function App() {
  return (
    <div className="App">
      <HomeMain/>
      <HomeNotifications/>
    </div>
  );  
}

export default App;