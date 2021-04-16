// Renders React Victory chart based on preset parameterized JSON data
// Takes params of JSON data Javascript objects on the form - const data = Data.

import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

function Chart(data) {
  return (
    <VictoryChart
    // domainPadding will add space to each side of VictoryBar to
    // prevent it from overlapping the axis
    domainPadding={20}
  >
  <VictoryAxis
      // Sets x-axis labels for the years and sets the label for the axis as "Year" 
      tickValues={1990, 1995, 2000, 2005, 2010, 2015}
      label="Year"
    />
    <VictoryAxis
      dependentAxis // Indicated that we are now dealing with the y-axis (dependant variable)
      //tickValues={500, 1000, 1500, 2000, 2500, 3000, 3500}
      label="Pollutant Amount (1000 tonnes)"
      //style={{axisLabel: {padding: 35 } }} 
    />

    <VictoryBar
      // Takes the data that is passed to it and creates the react component based on the axis and the data
      data={data}
      x="Year"
      y="Emissions"
    />
  </VictoryChart>
  );
}

export default Chart;
