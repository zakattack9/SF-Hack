import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import ReportedOutagesRow from './components/outages/ReportedOutagesRow';
import WeatherUpdatesRow from './components/weather/WeatherUpdatesRow';
import LocationStats from './components/location/LocationStats';
import ReportOutage from './components/report/ReportOutage';
import About from './components/about/About';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/outages" component={ReportedOutagesRow} />
      <Route path="/weather" component={WeatherUpdatesRow} />
      <Route path="/location" component={LocationStats} />
      <Route path="/report" component={ReportOutage} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
