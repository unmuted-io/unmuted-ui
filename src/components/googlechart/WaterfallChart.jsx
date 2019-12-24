import React, { Component } from "react";
import Chart from "react-google-charts";

class WaterfallChart extends Component {
  render() {
    return (
      <Chart
        width="100%"
        height="300px"
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["day", "a", "b", "c", "d"],
          ["Mon", 28, 28, 38, 38],
          ["Tue", 38, 38, 55, 55],
          ["Wed", 55, 55, 77, 77],
          ["Thu", 77, 77, 66, 66],
          ["Fri", 66, 66, 22, 22]
        ]}
        options={{
          legend: "none",
          bar: {
            groupWidth: "100%"
          }, // Remove space between bars.
          candlestick: {
            fallingColor: {
              strokeWidth: 0,
              fill: "#7759de"
            }, // red
            risingColor: {
              strokeWidth: 0,
              fill: "#FF9800"
            } // green
          }
        }}
      />
    );
  }
}

export default WaterfallChart;
