import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class DynamicLineBarChart extends Component {
  getOption = () => {
    return {
      title: {
        text: "Dynamic",
        subtext: "Bar & Line"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#283b56"
          }
        }
      },
      legend: {
        data: ["Data 1", "Data 2"]
      },
      color: ["#2196f3", "#7759de"],
      toolbox: {
        show: true,
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: (function() {
            let now = new Date();
            let res = [];
            let len = 10;
            while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
              now = new Date(now - 2000);
            }
            return res;
          })()
        },
        {
          type: "category",
          boundaryGap: true,
          data: (function() {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(10 - len - 1);
            }
            return res;
          })()
        }
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          name: "Start",
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: "value",
          scale: true,
          name: "End",
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: "Data 2",
          type: "bar",
          itemStyle: {
            barBorderRadius: [15, 15, 0, 0]
          },
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function() {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(Math.round(Math.random() * 1000));
            }
            return res;
          })()
        },
        {
          name: "Data 1",
          type: "line",
          smooth: true,
          data: (function() {
            var res = [];
            var len = 0;
            while (len < 10) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0);
              len++;
            }
            return res;
          })()
        }
      ]
    };
  };
  render() {
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "350px" }} />
    );
  }
}

export default DynamicLineBarChart;
