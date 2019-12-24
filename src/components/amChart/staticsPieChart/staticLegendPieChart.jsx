import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class StaticLegendPieChart extends PureComponent {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.chartDB = createRef();
  }
  componentDidMount() {
    const chart = am4core.create(this.chartDB.current, am4charts.PieChart);
    const data = [
      {
        country: "Lithuania",
        litres: 201.9
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      }
    ];
    chart.data = data;

    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    chart.legend = new am4charts.Legend();
    this.chart = chart;
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return <div ref={this.chartDB} style={{ height: this.props.height }} />;
  }
}
StaticLegendPieChart.propTypes = {
  height: PropTypes.string
};

export default StaticLegendPieChart;
