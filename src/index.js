// React App the helps to visualize European countries pollution data for the last 40 years
// Finn Lestrange

import React from "react";
import ReactDOM from "react-dom";
import Data from "./d2.json";
import sortData from "./components/DS.js";
import App from "./App.js";

document.body.style = "background: #282c34;";

var d1 = sortData("NH3", Data);

var formData;

var getFormData = (dataFromForm) => {
  formData = dataFromForm;
  console.log(formData);
  var pollutant = formData.pollutantType;
  d1 = sortData(pollutant, Data);
};

ReactDOM.render(
  <App data={d1} functionFromParent={getFormData.bind(this)} />,
  document.getElementById("root")
);
