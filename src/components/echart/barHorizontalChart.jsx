import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class BarHorizontalChart extends Component {
  getOption = () => {
    return {
      title: {
        text: "Bar",
        subtext: "Besic Bar Chart"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["2017", "2018"]
      },
      color: ["#FF9800", "#f44336"],
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ["line", "bar"]
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "value",
          boundaryGap: [0, 0.01]
        }
      ],
      yAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
      ],
      series: [
        {
          name: "2017",
          type: "bar",
          data: [18203, 23489, 29034, 104970, 131744, 130230, 29034]
        },
        {
          name: "2018",
          type: "bar",
          data: [19325, 23438, 31000, 121594, 134141, 181807, 31000]
        }
      ]
    };
  };
  render() {
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "300px" }} />
    );
  }
}

export default BarHorizontalChart;
