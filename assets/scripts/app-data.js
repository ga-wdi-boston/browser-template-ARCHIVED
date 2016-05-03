'use strict';

const app = {
  // api: 'https://surfsapp.herokuapp.com/',
  api: 'https://localhost:8080/',
  noaa: 'http://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=20160502&end_date=20160503&datum=MLLW&station=8443970&time_zone=LST&units=english&interval=&format=json'

  // noaa: 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20160503&range=1&station=8443970&product=water_temperature&units=english&time_zone=lst&interval=h&application=surfsapp&format=json'
  // http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808 15:00&end_date=20130808 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json

};

module.exports = app;
