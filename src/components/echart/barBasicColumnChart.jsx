import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class BarBasicColumnChart extends Component {
  getOption = () => {
    return {
      title: {
        text: "Bar Chart",
        subtext: "Basic Column Chart"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["Data1", "Data2"]
      },
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
      color: ["#7759de", "#2196f3"],
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        }
      ],
      series: [
        {
          name: "Data1",
          type: "line",
          smooth: true,
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              {
                type: "max",
                name: "Maximum"
              },
              {
                type: "min",
                name: "Minimum"
              }
            ]
          },
          markLine: {
            data: [
              {
                type: "average",
                name: "100"
              }
            ]
          }
        },
        {
          name: "Data2",
          type: "line",
          smooth: true,
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              {
                name: "Week Minimum",
                value: -2,
                xAxis: 1,
                yAxis: -1.5
              }
            ]
          },
          markLine: {
            data: [
              {
                type: "average",
                name: "100"
              }
            ]
          }
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

export default BarBasicColumnChart;
