import React, { Component } from "react";
import Chart from "react-google-charts";

class ExploadingChart extends Component {
  render() {
    return (
      <Chart
        width="100%"
        height="300px"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Language", "Speakers (in millions)"],
          ["Assamese", 13],
          ["Bengali", 83],
          ["Bodo", 1.4],
          ["Dogri", 2.3],
          ["Gujarati", 46],
          ["Hindi", 300],
          ["Kannada", 38],
          ["Kashmiri", 5.5],
          ["Konkani", 5],
          ["Maithili", 20],
          ["Malayalam", 33],
          ["Manipuri", 1.5],
          ["Marathi", 72],
          ["Nepali", 2.9],
          ["Oriya", 33]
        ]}
        options={{
          title: "Language",
          legend: "none",
          pieSliceText: "label",
          slices: {
            4: {
              offset: 0.2
            },
            12: {
              offset: 0.3
            },
            14: {
              offset: 0.4
            },
            15: {
              offset: 0.5
            }
          },
          colors: [
            "#2196f3",
            "#7759de",
            "#f44336",
            "#FF9800",
            "#4caf50",
            "#00ACC1"
          ]
        }}
      />
    );
  }
}

export default ExploadingChart;
