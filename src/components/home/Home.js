import React from 'react';
import './Home.css';
import HomeMain from './HomeMain';
import WeatherRow from './WeatherRow';
import OutageRow from './OutageRow';

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
      </div>
    );
  }
}

export default App;