import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component {
  render() {
    const data = {
      labels: ["Data 1", "Data 2", "Data 3"],
      datasets: [
        {
          data: [30, 30, 40],
          backgroundColor: ["#4caf50", "#FF9800", "#f44336"],
          hoverBackgroundColor: ["#4caf50", "#FF9800", "#f44336"]
        }
      ]
    };
    return (
      <Doughnut
        data={data}
        responsive={true}
        height={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default DoughnutChart;
