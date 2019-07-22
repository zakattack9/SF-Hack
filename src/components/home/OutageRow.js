import React from 'react';
import './OutageRow.css';
import SideNotification from './SideNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

class OutageRow extends React.Component {
  state = { outages: null }

  componentDidMount() {
    axios.get('https://gebef0w3d8.execute-api.us-west-2.amazonaws.com/dev/get')
      .then(res => {
        let outages = res.data.Items.sort(function (a, b) {
          return new Date(b.time.S) - new Date(a.time.S);
        });
        this.setState({ outages: outages.slice(0, 3) });
      })
      .catch(err => {
        console.log(err);
      })
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
      return (
        <div className="OutageRow">
          {/* <Fade bottom distance={'8px'} delay={50}> */}
            <div className="titleWrapper">
              <h1 className='mainTitle'>Reported<br />Outages</h1>
              <div className="boltIcon">
                <FontAwesomeIcon icon={faBolt} size="lg" />
              </div>
            </div>
          {/* </Fade> */}
          <div className="outagesWrapper">
            <div className="lds-ripple"><div></div><div></div></div>
          </div>
        </div>
      );
    }

    return (
      <div className="OutageRow">
        <div className="titleWrapper">
          <h1 className='mainTitle'>Reported<br />Outages</h1>
          <div className="boltIcon">
            <FontAwesomeIcon icon={faBolt} size="lg" />
          </div>
        </div>
        <div className="outagesWrapper">
          {this.state.outages.map((report, i) => {
            return <SideNotification
              key={i}
              delay={i * 100}
              location={report.city.S}
              time={this.convertTime(report.time.S)}
              title={report.location.S}
              description={report.description.S} />
          })}
        </div>

        <Fade bottom distance={'8px'} delay={300}>
          <div className="viewAll">
            <Link to="/outages">
              View All
          </Link>
          </div>
        </Fade>
      </div>
    )
  }
}

export default OutageRow;