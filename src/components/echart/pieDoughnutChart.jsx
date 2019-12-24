import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class PieDoughnutChart extends Component {
  getOption = () => {
    return {
      title: {
        text: "Pie",
        subtext: "Doughnut Chart",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["HTML", "SCSS", "JS", "Images", "Icons"]
      },
      color: ["#4caf50", "#f44336", "#FF9800", "#7759de", "#2196f3"],
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
            type: ["pie", "funnel"],
            option: {
              funnel: {
                x: "25%",
                width: "50%",
                funnelAlign: "left",
                max: 1548
              }
            }
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
      series: [
        {
          name: "Webpage",
          type: "pie",
          radius: ["50%", "70%"],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: "15",
                  fontWeight: "bold"
                }
              }
            }
          },
          data: [
            {
              value: 335,
              name: "HTML"
            },
            {
              value: 310,
              name: "SCSS"
            },
            {
              value: 234,
              name: "JS"
            },
            {
              value: 135,
              name: "Images"
            },
            {
              value: 1548,
              name: "Icons"
            }
          ]
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

export default PieDoughnutChart;
