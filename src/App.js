import React from 'react';
import Home from './components/Home';
import ReportedOutagesRow from './components/ReportedOutagesRow';
import LocationStats from './components/LocationStats';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/reports" component={ReportedOutagesRow} />
        <Route path="/location" component={LocationStats} />
      </Switch>
    );
  }
}

export default App;