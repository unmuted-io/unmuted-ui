// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class SiteChartStatic extends PureComponent {
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
    // dateAxis.startLocation = 0.6;
    // dateAxis.endLocation = 0.4;
    dateAxis.renderer.labels.template.disabled = true
    dateAxis.renderer.inside = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    // valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 50
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.renderer.grid.template.disabled = true

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "price"
    series.dataFields.dateX = "date"
    series.fillOpacity = 0
    series.tooltipText = "{valueY.value}"
    series.fill = am4core.color("#2196f3")
    series.stroke = am4core.color("#2196f3")
    series.strokeWidth = 2

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.fullWidthLineX = true
    chart.cursor.lineX.strokeWidth = 0
    chart.cursor.lineX.fill = am4core.color("#fff")
    chart.cursor.lineX.fillOpacity = 0

    const bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.circle.fill = am4core.color("#fff")
    bullet.circle.strokeWidth = 3
    bullet.circle.properties.scale = 0.7

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

SiteChartStatic.propTypes = {
  data: PropTypes.array,
  height: PropTypes.string,
}

export default SiteChartStatic
