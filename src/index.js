// React App the helps to visualize European countries pollution data for the last 40 years
// Finn Lestrange 

import React from 'react';
import ReactDOM from 'react-dom';
import Data from "./d2.json";
import Chart from "./Chart.js";
import sortData from "./DS.js";


const d1 = sortData("NH3", Data);

const chart = Chart(d1);

ReactDOM.render(chart, document.getElementById('root'));

