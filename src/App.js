import React from 'react';
import './App.css';
import HomeMain from './components/HomeMain';
import HomeNotifications from './components/HomeNotifications';

function App() {
  return (
    <div className="App">
      <HomeMain/>
      <HomeNotifications/>
    </div>
  );
}

export default App;
