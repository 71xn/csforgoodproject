// Renders React Victory chart based on preset parameterized JSON data
// Takes params of JSON data Javascript objects on the form - const data = Data.

import React, { Component } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
  VictoryTheme,
} from "victory";

// Takes prop of data in the form of parsed json
export default class Chart extends Component {
  render() {
    return (
      <div>
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          theme={VictoryTheme.material}
          animate={{ duration: 500 }}
          domainPadding={20}
          padding={{ top: 38, bottom: 60, left: 80, right: 20 }}
        >
          <VictoryAxis
            // Sets x-axis labels for the years and sets the label for the axis as "Year"
            //tickValues={[1990, 1995, 2000, 2005, 2010, 2015, 2020]}
            axisLabelComponent={<VictoryLabel dy={23} />}
            label="Year"
            style={{
              tickLabels: { fill: "#606368" },
              axisLabel: { fill: "#DEDEDF" },
              axis: { stroke: "#606368" },
            }}
          />
          <VictoryAxis
            dependentAxis // Indicated that we are now dealing with the y-axis (dependant variable)
            //tickValues={500, 1000, 1500, 2000, 2500, 3000, 3500}
            axisLabelComponent={<VictoryLabel dy={-38} />}
            label="Pollutant Amount (1000 tonnes)"
            style={{
              tickLabels: { fill: "#606368" },
              axisLabel: { fill: "#DEDEDF" },
              axis: { stroke: "#606368" },
            }}
          />

          <VictoryBar
            // Takes the data that is passed to it and creates the react component based on the axis and the data
            style={{
              data: { fill: "#B64FC8" },
            }}
            data={this.props.data}
            labels={({ datum }) => [
              `Year: ${datum.Year}`,
              `${datum.Emissions}`,
            ]}
            labelComponent={
              <VictoryTooltip
                dy={0}
                centerOffset={{ x: 25 }}
                flyoutStyle={{ stroke: "#606368", strokeWidth: 2 }}
              />
            }
            x="Year"
            y="Emissions"
          />
        </VictoryChart>
      </div>
    );
  }
}
