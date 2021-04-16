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
      tickValues={1990, 1995, 2000, 2005, 2010, 2015}
      label="Year"
    />
    <VictoryAxis
      dependentAxis
      //tickValues={500, 1000, 1500, 2000, 2500, 3000, 3500}
      label="Pollutant Amount (1000 tonnes)"
      //style={{axisLabel: {padding: 35 } }} 
    />

    <VictoryBar
      data={data}
      x="Year"
      y="Emissions"
    />
  </VictoryChart>
  );
}

export default Chart;
