import React, { Component } from "react";
import Chart from "react-google-charts";

class ThresholdChart extends Component {
  render() {
    return (
      <Chart
        width="100%"
        height="300px"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Pizza", "Popularity"],
          ["Pepperoni", 33],
          ["Hawaiian", 26],
          ["Mushroom", 22],
          ["Sausage", 10],
          ["Anchovies", 9]
        ]}
        options={{
          title: "Popularity of Types of Pizza",
          sliceVisibilityThreshold: 0.2,
          colors: ["#2196f3", "#7759de", "#FF9800", "#4caf50"]
        }}
      />
    );
  }
}

export default ThresholdChart;
