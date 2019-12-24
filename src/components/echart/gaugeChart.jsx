import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class GaugeChart extends Component {
  getOption = () => {
    return {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "gauge Chart",
          type: "gauge",
          axisLine: {
            show: true,
            lineStyle: {
              color: [[0.2, "#2196f3"], [0.8, "#4caf50"], [1, "#f44336"]],
              width: 10
            }
          },
          detail: {
            formatter: "{value}%"
          },
          data: [
            {
              value: 50,
              name: ""
            }
          ]
        }
      ]
    };
  };
  render() {
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "450px" }} />
    );
  }
}

export default GaugeChart;
