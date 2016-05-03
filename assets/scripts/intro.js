'use strict';
let google = require('https://www.gstatic.com/charts/loader.js');
google.charts.load('current', { packages:['corechart'] });

const drawChart = function drawChart() {
  let data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540],
  ]);

  let options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
        };

  let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  google.charts.setOnLoadCallback(drawChart);
  chart.draw(data, options);

};

module.exports = {
  drawChart,
};
