import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineOriginChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [85, 55, 70, 50, 75, 45, 60],
          borderWidth: 1,
          borderColor: "#00ACC1",
          backgroundColor: "#00ACC1",
          hoverborderColor: "#00ACC1",
          hoverBackgroundColor: "#00ACC1",
          fill: "origin"
        }
      ]
    };
    return (
      <Line
        data={data}
        height={300}
        responsive={true}
        options={{
          barValueSpacing: 20,
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default LineOriginChart;
