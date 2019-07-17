import React from 'react';
import './Home.css';
import HomeMain from './HomeMain';
import WeatherRow from './WeatherRow';
import OutageRow from './OutageRow';
// import ReportedOutagesRow from './components/ReportedOutagesRow';
// import LocationStats from './components/LocationStats';


class App extends React.Component {
  state = { selectedNode: null };

  render() {
    return (
      <div className="App">
        <HomeMain />

        <div className='HomeNotifications'>
          <WeatherRow />
          <OutageRow />
        </div>
        
        {/* <ReportedOutagesRow/> */}
        {/* <LocationStats /> */}
      </div>
    );
  }
}

export default App;