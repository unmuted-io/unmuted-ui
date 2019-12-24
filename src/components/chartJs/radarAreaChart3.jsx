import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class RaderAreaChart3 extends Component {
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
          backgroundColor: "transparent",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "transparent"
        },
        {
          label: "D2",
          data: [40, 80, 40, 65, 60, 50, 95],
          fill: true,
          cubicInterpolationMode: "monotone",
          borderWidth: 0,
          borderColor: "#7759de",
          backgroundColor: "transparent",
          hoverborderColor: "#7759de",
          hoverBackgroundColor: "transparent"
        },
        {
          label: "D3",
          data: [20, 40, 80, 60, 85, 60, 20],
          fill: true,
          borderWidth: 4,
          borderColor: "#4caf50",
          backgroundColor: "transparent",
          hoverborderColor: "#4caf50",
          hoverBackgroundColor: "transparent"
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

export default RaderAreaChart3;
