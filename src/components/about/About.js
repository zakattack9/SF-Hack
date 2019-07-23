import React from 'react';
import './About.css';
import StatusRisk from './StatusRisk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const About = props => {
  return (
    <div className="About">
      <div className="aboutWrapper">
        <div className="titleWrapper">
          <Fade bottom distance={'10px'}>
            <h1 className="title">
              <span className="thin">Power Outage</span>
              <br />
              Risk and Status Levels
            </h1>
          </Fade>

          <Fade bottom distance={'8px'} delay={150}>
            <div className="format">
              <span className="riskLevel">Risk Level</span>
              <br />
              <span className="statusLevel">Status Level</span>
            </div>
          </Fade>

          <Fade bottom distance={'8px'} delay={300}>
            <hr />
          </Fade>
        </div>

        <div className="colWrapper">
          <div className="col1">
            <Fade left distance={'12px'} delay={150}>
              <StatusRisk
                riskStyle={{ color: '#A4E6A2' }}
                statusStyle={{ color: '#A4E6A2' }}
                risk="None"
                status="Good"
                desc="No outages have been reported or detected within the city" />
            </Fade>

            <Fade left distance={'12px'} delay={300}>
              <StatusRisk
                riskStyle={{ color: '#FBF25A' }}
                statusStyle={{ color: '#FF6969' }}
                risk="Low"
                status="Reported Down"
                desc="At least one reported outage, but no outages detected within the city" />
            </Fade>

            <Fade left distance={'12px'} delay={450}>
              <StatusRisk
                riskStyle={{ color: '#FEB535' }}
                statusStyle={{ color: '#FF6969' }}
                risk="Medium"
                status="Potentially Down"
                desc="No reported outages, but several outages detected within the city" />
            </Fade>
          </div>

          <div className="col2">
            <Fade left distance={'12px'} delay={150}>
              <StatusRisk
                riskStyle={{ color: '#FF6969' }}
                statusStyle={{ color: '#FF6969' }}
                risk="High"
                status="Likely Down"
                desc="At least one reported outage, with several outages detected within the city" />
            </Fade>

            <Fade left distance={'12px'} delay={300}>
              <StatusRisk
                riskStyle={{ color: '#FF6969' }}
                statusStyle={{ color: '#FF6969' }}
                risk="Very High"
                status="Confirmed Down"
                desc="At least three reported outages, with over 75% of the city detected without power" />
            </Fade>
          </div>
        </div>
      </div>

      <div className="navMenu">
        <Link to='/'>
          <Fade right distance={'10px'} delay={150}>
            <FontAwesomeIcon className="homeNav" icon={faHome} size="2x" />
          </Fade>
        </Link>
        <Link to='/weather'>
          <Fade right distance={'10px'} delay={150}>
            <FontAwesomeIcon className="cloudNav" icon={faCloud} size="2x" />
          </Fade>
        </Link>
        <Link to='/outages'>
          <Fade right distance={'10px'} delay={150}>
            <FontAwesomeIcon className="boltNav" icon={faBolt} size="2x" />
          </Fade>
        </Link>
      </div>
    </div>
  );
}

export default About;