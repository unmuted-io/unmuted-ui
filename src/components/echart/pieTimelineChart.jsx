import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class PieTimelineChart extends Component {
  getOption = () => {
    let idx = 1;
    return {
      timeline: {
        data: [
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          {
            name: "2013-06-01",
            symbol: "emptyStar6",
            symbolSize: 8
          },
          "2013-07-01",
          "2013-08-01",
          "2013-09-01",
          "2013-10-01",
          "2013-11-01",
          {
            name: "2013-12-01",
            symbol: "star6",
            symbolSize: 8
          }
        ]
      },
      options: [
        {
          title: {
            text: "PieChart",
            subtext: "Pie Timeline Chart"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            data: ["Chrome", "Firefox", "Safari", "IE9+", "IE8-"]
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
                    max: 1700
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
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              center: ["50%", "45%"],
              radius: "50%",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
            }
          ]
        },
        {
          series: [
            {
              name: "Browser (data is purely fictitious)",
              type: "pie",
              data: [
                {
                  value: idx * 128 + 80,
                  name: "Chrome"
                },
                {
                  value: idx * 64 + 160,
                  name: "Firefox"
                },
                {
                  value: idx * 32 + 320,
                  name: "Safari"
                },
                {
                  value: idx * 16 + 640,
                  name: "IE9+"
                },
                {
                  value: idx++ * 8 + 1280,
                  name: "IE8-"
                }
              ]
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

export default PieTimelineChart;
