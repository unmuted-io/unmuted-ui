// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class SitChartCryptoStatics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // Create chart instance
    const chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    // Add data
    chart.data = this.props.data
    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.startLocation = 0.6
    dateAxis.endLocation = 0.4
    dateAxis.renderer.labels.template.disabled = true
    dateAxis.renderer.inside = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.logarithmic = false
    valueAxis.renderer.minGridDistance = 1
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "value"
    series.dataFields.dateX = "date"
    series.strokeWidth = 2
    series.tooltipText = "{valueY.value}"
    series.fill = am4core.color(this.props.color)
    series.stroke = am4core.color(this.props.color)
    chart.padding(0, 0, 0, 0)

    this.chart = chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return <div ref={this.chartDB} style={{ height: this.props.height }} />
  }
}
SitChartCryptoStatics.propTypes = {
  data: PropTypes.array,
  height: PropTypes.string,
  color: PropTypes.string,
}

export default SitChartCryptoStatics
