import React, { Component } from "react";
import Chart from "react-google-charts";

class CandlestickCharts extends Component {
  render() {
    return (
      <Chart
        width="100%"
        height="300px"
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["day", "a", "b", "c", "d"],
          ["Mon", 20, 28, 38, 45],
          ["Tue", 31, 38, 55, 66],
          ["Wed", 50, 55, 77, 80],
          ["Thu", 77, 77, 66, 50],
          ["Fri", 68, 66, 22, 15]
        ]}
        options={{
          legend: "none",
          colors: ["#7759de"]
        }}
      />
    );
  }
}

export default CandlestickCharts;
