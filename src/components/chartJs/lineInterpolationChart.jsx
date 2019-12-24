import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineInterpolationChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [55, 70, 62, 81, 56, 70, 90],
          fill: false,
          borderWidth: 4,
          lineTension: 0,
          borderDash: [15, 10],
          borderColor: "#7759de",
          backgroundColor: "#7759de",
          hoverborderColor: "#7759de",
          hoverBackgroundColor: "#7759de"
        },
        {
          label: "D2",
          data: [85, 55, 70, 50, 75, 45, 60],
          fill: true,
          cubicInterpolationMode: "monotone",
          borderWidth: 0,
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "#2196f3"
        },
        {
          label: "D3",
          data: [50, 75, 80, 70, 85, 80, 70],
          fill: false,
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

export default LineInterpolationChart;
