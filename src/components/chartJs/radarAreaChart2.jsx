import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class RaderAreaChart2 extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [60, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: "#4caf50",
          backgroundColor: "#4caf50",
          hoverborderColor: "#4caf50",
          hoverBackgroundColor: "#4caf50"
        },
        {
          label: "D2",
          data: [40, 80, 40, 65, 60, 50, 95],
          fill: true,
          cubicInterpolationMode: "monotone",
          borderWidth: 0,
          borderColor: "#f44336",
          backgroundColor: "#f44336",
          hoverborderColor: "#f44336",
          hoverBackgroundColor: "#f44336"
        },
        {
          label: "D3",
          data: [20, 40, 80, 60, 85, 60, 20],
          fill: true,
          borderWidth: 4,
          borderColor: "#FF9800",
          backgroundColor: "#FF9800",
          hoverborderColor: "#FF9800",
          hoverBackgroundColor: "#FF9800"
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

export default RaderAreaChart2;
