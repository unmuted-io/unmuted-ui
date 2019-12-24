import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class BarHorizontalChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3],
      datasets: [
        {
          label: "Data 1",
          data: [25, 45, 74, 85],
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "#2196f3"
        },
        {
          label: "Data 2",
          data: [30, 52, 65, 65],
          borderColor: "#7759de",
          backgroundColor: "#7759de",
          hoverborderColor: "#7759de",
          hoverBackgroundColor: "#7759de"
        }
      ]
    };
    return (
      <HorizontalBar
        data={data}
        height={340}
        options={{
          barValueSpacing: 20
        }}
      />
    );
  }
}

export default BarHorizontalChart;
