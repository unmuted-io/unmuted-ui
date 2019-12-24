import React, { Component } from "react";
import Chart from "react-google-charts";

class DonutChart extends Component {
  render() {
    return (
      <Chart
        width="100%"
        height="300px"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7]
        ]}
        options={{
          title: "My Daily Activities",
          pieHole: 0.4,
          colors: ["#2196f3", "#7759de", "#f44336", "#FF9800", "#4caf50"]
        }}
      />
    );
  }
}

export default DonutChart;
