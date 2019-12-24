import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class AreaChart extends Component {
  getOption = () => {
    return {
      tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    color: "#2196f3",
    series: [{
        data: [1, 5, 3, 6, 4, 8, 10],
        type: 'line',
    }]
    }
};
  render() {
    return <ReactEcharts option={this.getOption()} style={{height: '300px'}}/>;
  }
}

export default AreaChart;