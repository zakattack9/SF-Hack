import React from 'react';
import './ReportedOutagesRow.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from '../SearchBar';
import ReportButton from '../ReportButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ReportedOutagesRow extends React.Component {
  state = { outages: null, search: null }

  componentDidMount() {
    axios.get('https://gebef0w3d8.execute-api.us-west-2.amazonaws.com/dev/get')
      .then(res => {
        let outages = res.data.Items.sort(function (a, b) {
          return new Date(b.time.S) - new Date(a.time.S);
        });
        this.setState({ outages });
      })
      .catch(err => {
        console.log(err);
      })
  }

  onSearchSubmit = (term) => {
    this.setState({ search: term });
  }

  renderOutages() {
    if (this.state.search === null || this.state.search === '') {
      return this.state.outages.map((report, i) => {
        return <ReportedOutagesNotifications
          key={i}
          location={report.city.S}
          time={this.convertTime(report.time.S)}
          stateFarmLocation={report.location.S}
          description={report.description.S} />
      })
    } else {
      return this.state.outages.map((report, i) => {
        if (report.location.S.toLowerCase().includes(this.state.search.toLowerCase())) {
          return <ReportedOutagesNotifications
            key={i}
            location={report.city.S}
            time={this.convertTime(report.time.S)}
            stateFarmLocation={report.location.S}
            description={report.description.S} />
        }
        return false;
      })
    }
  }

  convertTime = (time) => {
    let date = new Date(time);
    let hrMin;
    if (date.getHours() === 12) {
      hrMin = `${date.getHours()}:${date.getMinutes()} pm`;
    } else if (date.getHours() === 24) {
      hrMin = `${date.getHours() - 12}:${date.getMinutes()} am`;
    } else if (date.getHours() > 12) {
      hrMin = `${date.getHours() - 12}:${date.getMinutes()} pm`;
    } else {
      hrMin = `${date.getHours()}:${date.getMinutes()} am`;
    }
    return hrMin;
  }

  render() {
    if (this.state.outages === null) {
      return (<div className="ReportedOutagesRow"></div>);
    }

    return (
      <div className="ReportedOutagesRow">
        <SearchBar width="40%" onSubmitForm={this.onSearchSubmit} />
        <div className="boltIcon">
          <FontAwesomeIcon icon={faBolt} size="lg" />
        </div>
        <h1 className='outagesTitle'>Reported Outages</h1>
        <div className="outageNotificationWrapper">
          {this.renderOutages()}
        </div>
        <ReportButton />

        <div className="outagesNav">
          <div className="homeIcon">
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
          </div>

          <div className="arrowWrapper">
            <Link to='/weather'>
              <div className="arrowText">Weather<br />Updates</div>
              <FontAwesomeIcon className="arrowIcon" icon={faCaretRight} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ReportedOutagesRow;