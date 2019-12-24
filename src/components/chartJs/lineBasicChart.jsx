import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineBasicChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [45, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "#2196f3"
        },
        {
          label: "D2",
          data: [45, 80, 45, 45, 60, 45, 80],
          fill: true,
          cubicInterpolationMode: "monotone",
          borderWidth: 0,
          borderColor: "#7759de",
          backgroundColor: "#7759de",
          hoverborderColor: "#7759de",
          hoverBackgroundColor: "#7759de"
        },
        {
          label: "D3",
          data: [83, 45, 60, 45, 45, 55, 45],
          fill: true,
          borderWidth: 4,
          borderColor: "#4caf50",
          backgroundColor: "#4caf50",
          hoverborderColor: "#4caf50",
          hoverBackgroundColor: "#4caf50"
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

export default LineBasicChart;
