// import external modules
import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class AverageChart extends PureComponent {
  constructor(props) {
    super(props);
    this.chartDB = createRef();
  }

  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create(this.chartDB.current, am4charts.XYChart);

    chart.data = this.props.data;

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.startLocation = 0.6;
    dateAxis.endLocation = 0.4;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.inside = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 0;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "price";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;
    series.tooltipText = "{valueY.value}";

    if (this.props.colorCode) {
      series.stroke = am4core.color(this.props.colorCode);
      series.strokeWidth = 3;
      series.fillOpacity = 1;
      const gradient = new am4core.LinearGradient();
      gradient.addColor(am4core.color(this.props.colorCode), 0.2);
      gradient.addColor(am4core.color(this.props.colorCode), 0);
      gradient.rotation = 90;
      series.fill = gradient;
    } else {
      series.fill = am4core.color("#fff");
      series.stroke = am4core.color("#fff");
      series.strokeWidth = 3;
    }

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color("#fff");
    chart.cursor.lineX.fillOpacity = 0;
    chart.padding(0, 0, 0, 0);

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div
        ref={this.chartDB}
        className="position-absolute bottom-chart"
        style={{ width: this.props.width, height: this.props.height }}
      />
    );
  }
}

AverageChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string
};
AverageChart.defaultProps = {
  width: "100%"
};

export default AverageChart;
