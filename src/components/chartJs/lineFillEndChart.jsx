import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineFillEndChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "D1",
          data: [85, 55, 70, 50, 75, 45, 60],
          borderWidth: 1,
          borderColor: "#4caf50",
          backgroundColor: "#4caf50",
          hoverborderColor: "#4caf50",
          hoverBackgroundColor: "#4caf50",
          fill: "end"
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

export default LineFillEndChart;
