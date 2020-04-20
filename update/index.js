/*
 * ### Dependencies ###
 */

const fs = require('fs');
const Joi = require('@hapi/joi');
const moment = require('moment');
const fetch = require('node-fetch');
const Papa = require('papaparse');
const path = require('path');

/*
 * ### Constants ###
 */

const DATA_PATH = '../src/assets/data/data.json';
const DATA_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

const DATE_FORMAT = 'M/D/YY';

const LAT = 'Lat';
const LON = 'Long';
const PROVINCE = 'Province/State';
const COUNTRY = 'Country/Region';

const SCHEMA = Joi.array().items(
  Joi.object({
    'Country/Region': Joi.string(),
    'Province/State': Joi.string().allow(null),
    Lat: Joi.number(),
    Long: Joi.number(),
  }).pattern(/^1?[0-9]\/[1-3]?[0-9]\/\d+$/, Joi.number()),
);

/*
 * ### Functions ###
 */

/**
 * Assures that a directory exists and creates it if it does not exist.
 * @param  dir Directory to check. 
 * @return     True if directory exists.
 */
function assureDirExists(dir) {
  const dirname = path.dirname(dir);
  if (fs.existsSync(dirname)) return true;
  assureDirExists(dirname);
  fs.mkdirSync(dirname);
}

/**
 * Fetches data from a URL.
 * @param  url URL of the data.
 * @return     Data as string.
 */
async function fetchData(url) {
  return fetch(url).then(response => response.text());
}

/**
 * Main function of the program.
 */
async function main() {
  try {
    /* Get data from URL. */
    const csv = await fetchData(DATA_URL);

    /* Parse data. */
    const data = parseData(csv);
    const totalInfections = Object.keys(data)
        .map(key => {
          return [
            moment.utc(key, DATE_FORMAT).unix(), // Unix time stamp
            data[key], // Number of cases
          ];
        })
        /* Sort by timestamp. */
        .sort((a, b) => a[0] - b[0]);
    
    /* Calculate new infections per day. */
    const newInfections = totalInfections.map((point, index) => {
      const deltaInfections = (index === 0)
          ? point[1]
          : point[1] - totalInfections[index - 1][1];
      
      return [point[0], deltaInfections];
    });

    /* Save data to file. */
    saveData(newInfections);
    console.log('Successfully updated data.');
  } catch(error) {
    console.error(error);
  }
}

/**
 * Parse csv data and return result
 * @param  csv CSV data as string.
 * @return     Parsed CSV data as array. 
 */
function parseData(csv) {
  const parse = Papa.parse(
    csv,
    {
      dynamicTyping: true,
      header: true,
    },
  );
  const data = parse.data;

  validateData(data);

  let germanData = data.find(d => d[COUNTRY] === 'Germany');
  
  delete germanData[COUNTRY];
  delete germanData[PROVINCE];
  delete germanData[LAT];
  delete germanData[LON];

  return germanData;
}

/**
 * Saves data to a file.
 * @param  data Data to save.
 */
function saveData(data) {
  assureDirExists(DATA_PATH);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data));
}

/**
 * Returns true if the data is valid.
 * @param  data Data to validate.
 * @return      True if the data is valid.
 */
function validateData(data) {
  const { error } = SCHEMA.validate(data);
  if (error) {
    throw new Error(error);
  }
  return true;
}

/*
 * ### Start program ### 
 */

main();
