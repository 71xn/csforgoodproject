// React App the helps to visualize European countries pollution data for the last 40 years
// Finn Lestrange

import React from "react";
import ReactDOM from "react-dom";
import Data from "./final_data.json";
import sortData from "./components/DS.js";
import App from "./App.js";

document.body.style = "background: #202124;";

var d1 = sortData("Austria", "SOx", Data);

/*
var getFormData = (dataFromForm) => {
  var formData = dataFromForm;
  console.log(formData);
  var pollutant = formData.pollutantType;
  var country = formData.country;
  d1 = sortData(country, pollutant, Data);
};
*/

ReactDOM.render(<App data={d1} />, document.getElementById("root"));
