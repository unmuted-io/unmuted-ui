import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class RaderAreaChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [60, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "#2196f3"
        },
        {
          label: "D2",
          data: [40, 80, 40, 65, 60, 50, 95],
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
          data: [20, 40, 80, 60, 85, 60, 20],
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
      <Radar
        data={data}
        responsive={true}
        height={300}
        options={{
          barValueSpacing: 20,
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default RaderAreaChart;
