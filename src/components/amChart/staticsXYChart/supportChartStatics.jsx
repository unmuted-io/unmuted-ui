// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class SupportChartStatic extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // Create chart
    const chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    // Add data
    chart.data = this.props.chartData

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    // dateAxis.renderer.grid.template.disabled = true;
    dateAxis.startLocation = 0.6
    dateAxis.endLocation = 0.4
    dateAxis.renderer.opposite = true
    // dateAxis.renderer.labels.template.disabled = true;
    // dateAxis.renderer.inside = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.logarithmic = false
    valueAxis.renderer.minGridDistance = 1
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "price"
    series.dataFields.dateX = "date"
    series.strokeWidth = 3
    series.fillOpacity = 0.1
    series.tooltipText = "{valueY.value}"
    series.stroke = am4core.color(this.props.colorCode)
    series.strokeWidth = 3
    series.fillOpacity = 1
    const gradient = new am4core.LinearGradient()
    gradient.addColor(am4core.color(this.props.colorCode), 0.2)
    gradient.addColor(am4core.color(this.props.colorCode), 0)
    gradient.rotation = 90
    series.fill = gradient

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.fullWidthLineX = true
    chart.cursor.lineX.strokeWidth = 0
    chart.cursor.lineX.fillOpacity = 0
    chart.padding(0, 0, 0, 0)

    this.chart = chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return (
      <div
        ref={this.chartDB}
        style={{ width: this.props.width, height: this.props.height }}
      />
    )
  }
}

SupportChartStatic.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  colorCode: PropTypes.string,
  chartData: PropTypes.array,
}
SupportChartStatic.defaultProps = {
  width: "100%",
}

export default SupportChartStatic
