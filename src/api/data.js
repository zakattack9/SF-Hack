// pulls required SF states, counties, cities from sfLocationData and structures locations
export function locationBuilder() {
  let sfLocations = {
    states: [],
    counties: {},
    cities: {}
  };

  sfLocationData.forEach(location => {
    if (sfLocations.states.indexOf(location.state) === -1) {
      sfLocations.states.push(location.state);
    }
    
    if (sfLocations.counties[location.state] === undefined) {
      sfLocations.counties[location.state] = [location.county];
    } else {
      sfLocations.counties[location.state].push(location.county)
    }

    if (sfLocations.cities[location.county] === undefined) {
      sfLocations.cities[location.county] = [location.apiCity];
    } else {
      sfLocations.cities[location.county].push(location.apiCity)
    }

  });

  return sfLocations;
}

// Statefarm locations to be populated with power outage data for later
// because the PowerOutage API does not have the proper city names for all cities, we use `apiCity` to specify the city name matching what's stored in the API 
export let sfLocationData = [
  // PHOENIX LOCATIONS
  {
    locationName: 'Marina Heights',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Arizona',
    abbrState: 'AZ',
    county: 'Maricopa',
    city: 'Tempe',
    apiCity: 'Tempe',
    type: 'Phoenix Hub',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // DALLAS LOCATIONS
  {
    locationName: 'CityLine',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Texas',
    abbrState: 'TX',
    county: 'Collin',
    city: 'Richardson',
    apiCity: 'Garland', // closest city to Richardson
    type: 'Dallas Hub',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Regent Commons',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Texas',
    abbrState: 'TX',
    county: 'Dallas',
    city: 'Irving',
    apiCity: 'Unknown', // city of Dallas
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // ATLANTA LOCATIONS
  {
    locationName: 'Park Center',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Dekalb',
    city: 'Dunwoody',
    apiCity: 'Unknown', // entire county of Dekalb
    type: 'Atlanta Hub',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Ashford Dunwoody',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Dekalb',
    city: 'Dunwoody',
    apiCity: 'Unknown', // entire county of Dekalb
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Atlanta',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Fulton',
    city: 'Johns Creek',
    apiCity: 'Unknown', // entire county of Fulton
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Duluth',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Fulton',
    city: 'Johns Creek',
    apiCity: 'Unknown', // entire county of Fulton
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Perimeter',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Dekalb',
    city: 'Dunwoody',
    apiCity: 'Unknown', // entire county of Dekalb
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Ravinia',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Dekalb',
    city: 'Dunwoody',
    apiCity: 'Unknown', // entire county of Dekalb
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // BLOOMINGTON LOCATIONS
  {
    locationName: 'Corporate Headquarters',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Illinois',
    abbrState: 'IL',
    county: 'Mclean',
    city: 'Bloomington',
    apiCity: '61704', // zip code for Bloomington
    type: 'Headquarters',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Corporate South',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Illinois',
    abbrState: 'IL',
    county: 'Mclean',
    city: 'Bloomington',
    apiCity: '61704', // zip code for Bloomington
    type: 'Facility',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Illinois',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Illinois',
    abbrState: 'IL',
    county: 'Mclean',
    city: 'Bloomington',
    apiCity: '61704', // zip code for Bloomington
    type: 'Operations Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Oakland Ave',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Illinois',
    abbrState: 'IL',
    county: 'Mclean',
    city: 'Bloomington',
    apiCity: '61701', // correct zip code
    type: 'Facility',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // DATA CENTER LOCATIONS
  {
    locationName: 'Richardson',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Texas',
    abbrState: 'IL',
    county: 'Collin',
    city: 'Richardson',
    apiCity: 'Garland', // closest city to Richardson
    type: 'Data Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'Olathe',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Kansas',
    abbrState: 'KS',
    county: 'Johnson',
    city: 'Olathe',
    apiCity: 'Unknown', // largest city tracked in county
    type: 'Data Center',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // ISC LOCATIONS
  {
    locationName: 'ISC Central',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Texas',
    abbrState: 'TX',
    county: 'Dallas',
    city: 'Irving',
    apiCity: 'Unknown', // city of Dallas
    type: 'ISC',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'ISC East',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Georgia',
    abbrState: 'GA',
    county: 'Fulton',
    city: 'Alpharetta',
    apiCity: 'Unknown', // county of Fulton
    type: 'ISC',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'ISC West',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Arizona',
    abbrState: 'AZ',
    county: 'Maricopa',
    city: 'Phoenix',
    apiCity: 'Phoenix',
    type: 'ISC',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  // MRSF LOCATIONS
  {
    locationName: 'MRSF Central',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'Illinois',
    abbrState: 'IL',
    county: 'Mclean',
    city: 'Bloomington',
    apiCity: '61704', // zip code for Bloomington
    type: 'Multi Regional Services Facility',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
  {
    locationName: 'MRSF East',
    status: '',
    risk: '',
    reports: 0,
    size: null,
    state: 'South Carolina',
    abbrState: 'SC',
    county: 'York',
    city: 'Rock Hill',
    apiCity: 'Unknown', // largest tracked city in county
    type: 'Multi Regional Services Facility',
    powerOutageData: {
      state: null,
      county: null,
      city: null
    },
    lastUpdated: null
  },
];