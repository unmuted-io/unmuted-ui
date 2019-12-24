import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class AreaChart2 extends Component {
  getOption = () => {
    return {
      tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['abc', 'def', 'pqr']
    },
    toolbox: {
        show: false,
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
                type: ['line', 'bar', 'stack', 'tiled']
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
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']
    }],
    color: ["#4caf50", "#7759de", "#2196f3"],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: 'abc',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'macarons'
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710]
        },
        {
            name: 'def',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'macarons'
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10]
        },
        {
            name: 'pqr',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'macarons'
                    }
                }
            },
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }
    ]
    }
};
  render() {
    return <ReactEcharts option={this.getOption()} style={{height: '300px'}}/>;
  }
}

export default AreaChart2;