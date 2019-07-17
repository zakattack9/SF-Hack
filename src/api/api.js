// import Statefarm location builder and SF data array
import axios from 'axios';
import { sfLocationData, locationBuilder } from './data.js';
// import { buildChart } from './chart.js';

const API_KEY = 'ASU3736!984!76';

// States, Counties, Cities to pull power outage data from
const SF_LOCATIONS_SORTED = locationBuilder();
const SF_STATES = SF_LOCATIONS_SORTED.states;
const SF_COUNTIES = SF_LOCATIONS_SORTED.counties;
const SF_CITIES = SF_LOCATIONS_SORTED.cities;

// States, Counties, Cities variables for power outage data
let sfStateData;
let sfCountyData = {};
let sfCityData = {};

// gets data from PowerOutageAPI
export function getPowerOutageData() {
  return new Promise((resolve, reject) => {
    // filters queried power outage data to include only SF related data
    function filterOutageData(allData, filterData, filterParam) {
      return allData.filter(data => {
        return filterData.indexOf(data[filterParam]) !== -1;
      });
    }
  
    axios.get(`https://poweroutage.us/api/getstateoutageinfo/${API_KEY}`)
      .then(res => {
        let allStates = res.data.StateOutageInfo;
        sfStateData = filterOutageData(allStates, SF_STATES, 'StateName');
        getCountyData();
      })
  
  
    function getCountyData() {
      let allRequests = []; // holds all requests as promises
      let stateCountyData = []; // temporarily holds all retrieved counties
  
      sfStateData.forEach(state => {
        allRequests.push(
          axios.get(`https://poweroutage.us/api/getcountyoutageinfo/${API_KEY}`, {
            params: { StateId: state.StateId }
          })
            .then(res => {
              let allCounties = res.data.CountyOutageInfo;
              let filteredCounties = filterOutageData(allCounties, SF_COUNTIES[state.StateName], 'CountyName')
              // pushes all counties to array for `getCitiesData()` to loop from
              stateCountyData.push(...filteredCounties);
              if (sfCountyData[state.StateName] === undefined) {
                sfCountyData[state.StateName] = [...filteredCounties];
              } else {
                sfCountyData[state.StateName].push(...filteredCounties);
              }
            })
        );
      });
  
      // waits for all looped requests to finish
      Promise.all(allRequests).then(res => {
        sfCountyData.allCounties = stateCountyData;
        getCitiesData();
      })
    }
  
  
    function getCitiesData() {
      let allRequests = [];
  
      sfCountyData.allCounties.forEach(county => {
        allRequests.push(
          axios.get(`https://poweroutage.us/api/getcityoutageinfo/${API_KEY}`, {
            params: { CountyId: county.CountyId }
          })
            .then(res => {
              let allCities = res.data.CityOutageInfo;
              let filteredCities = filterOutageData(allCities, SF_CITIES[county.CountyName], 'CityName');
              // console.log(allCities);
              // adds data to sfCityData as a key value pair to prevent grabbing the wrong city (some cities have the same name)
              if (sfCityData[county.CountyName] === undefined) {
                sfCityData[county.CountyName] = [...filteredCities];
              } else {
                sfCityData[county.CountyName].push(...filteredCities);
              }
            })
        );
      });
  
      Promise.all(allRequests).then(res => {
        buildSFData();
      })
    }
  
    // adds power outage info to array of objects with SF locations
    function buildSFData() {
      // console.log(sfStateData , sfCountyData, sfCityData);
    
      sfLocationData.forEach(location => {
        // adds state power outage data to SF location
        location.powerOutageData.state = sfStateData.find(stateData => {
          return stateData.StateName === location.state;
        });
    
        // adds county power outage data to SF loaction
        location.powerOutageData.county = sfCountyData[location.state].find(countyData => {
          return countyData.CountyName === location.county;
        });
    
        // adds city power outage data to SF loaction
        location.powerOutageData.city = sfCityData[location.county].find(cityData => {
          return cityData.CityName === location.apiCity;
        });
    
        let lastUpdated = location.powerOutageData.city.LastUpdatedDateTime;
        let GMTtime = +lastUpdated.substring(lastUpdated.lastIndexOf("(") + 1, lastUpdated.lastIndexOf(")"));
        location.lastUpdated = new Date(GMTtime).toLocaleTimeString();
    
        // set size to tracked city count (used for D3 bubble sizing)
        location.size = location.powerOutageData.city.TrackedCount;
    
        determineRisk(location);
      });
    
      function determineRisk(location) {
        let cityOutageCount = location.powerOutageData.city.OutageCount;
        let cityTrackedCount = location.powerOutageData.city.TrackedCount;
        let percentWithoutPower = cityOutageCount / cityTrackedCount * 100;
        // minimum percentage of people without power in city to be considered a medium risk
        const CITY_OUTAGE_COUNT_THRESHOLD = 0.1;
    
        if (location.reports === 0 && percentWithoutPower <= CITY_OUTAGE_COUNT_THRESHOLD) {
          location.risk = 'None';
          location.status = 'Good';
        } else if (location.reports > 0 && percentWithoutPower <= CITY_OUTAGE_COUNT_THRESHOLD) {
          location.risk = 'Low';
          location.status = 'Reported Down';
        } else if (location.reports === 0 && percentWithoutPower > CITY_OUTAGE_COUNT_THRESHOLD) {
          location.risk = 'Medium';
          location.status = 'Potentially Down';
        } else if (location.reports > 0 && percentWithoutPower > CITY_OUTAGE_COUNT_THRESHOLD) {
          location.risk = 'High';
          location.status = 'Likely Down';
        } else if (location.reports > 2 && percentWithoutPower > 95) {
          location.risk = 'Very High';
          location.status = 'Confirmed Down';
        }
      }
    
      console.log("SF Location Data", sfLocationData);
      // buildChart(sfLocationData);
      resolve(sfLocationData);
    }
  })
}

// DynamoDB should clear out old user reports that expire after 6 hours or less