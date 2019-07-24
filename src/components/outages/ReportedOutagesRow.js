import React from 'react';
import './ReportedOutagesRow.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from '../SearchBar';
import ReportButton from '../ReportButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

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
    if (this.state.outages === null) {
      return <div className="lds-ripple"><div></div><div></div></div>;
    } else if (this.state.search === null || this.state.search === '') {
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
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let hrMin;
    if (date.getHours() === 12) {
      hrMin = `${date.getHours()}:${minutes} pm`;
    } else if (date.getHours() === 24) {
      hrMin = `${date.getHours() - 12}:${minutes} am`;
    } else if (date.getHours() > 12) {
      hrMin = `${date.getHours() - 12}:${minutes} pm`;
    } else {
      hrMin = `${date.getHours()}:${minutes} am`;
    }
    return hrMin;
  }

  render() {
    return (
      <div className="ReportedOutagesRow">
        <SearchBar width="40%" onSubmitForm={this.onSearchSubmit} />
        <Fade bottom distance={'7px'}>
          <div className="boltIcon">
            <FontAwesomeIcon icon={faBolt} size="lg" />
          </div>
          <h1 className='outagesTitle'>Reported Outages</h1>
        </Fade>
        <div className="outageNotificationWrapper">
          {this.renderOutages()}
        </div>
        <ReportButton />

        <Fade right distance={'10px'}>
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
        </Fade>
      </div>
    )
  }
}

export default ReportedOutagesRow;