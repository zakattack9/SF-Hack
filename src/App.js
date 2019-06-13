import React from 'react';
import './App.css';
import HomeMain from './components/HomeMain';
import HomeNotifications from './components/HomeNotifications';
// import ReportedOutagesRow from './components/ReportedOutagesRow';
import LocationStats from './components/LocationStats';

class App extends React.Component {
  state = { selectedNode: null };
  
  render () {
    return (
      <div className="App">
        <HomeMain/>
        <HomeNotifications/>
        {/* <ReportedOutagesRow/> */}
        {/* <LocationStats /> */}
      </div>
    );  
  }
}

export default App;