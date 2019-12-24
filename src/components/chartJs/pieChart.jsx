import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
  render() {
    const data = {
      labels: ["Data 1", "Data 2", "Data 3"],
      datasets: [
        {
          data: [30, 30, 40],
          backgroundColor: ["#4caf50", "#7759de", "#2196f3"],
          hoverBackgroundColor: ["#4caf50", "#7759de", "#2196f3"]
        }
      ]
    };
    return (
      <Pie
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

export default PieChart;
