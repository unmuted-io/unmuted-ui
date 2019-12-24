// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class CryptoShartStatics extends PureComponent {
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
    let databtc = []
    let dataeth = []
    let dataltc = []
    let visits = 10
    let i = 0

    for (i = 0; i <= 80; i++) {
      visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
      databtc.push({
        date: new Date().setSeconds(i - 30),
        value: Math.abs(visits),
      })
    }

    for (i = 0; i <= 80; i++) {
      visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
      dataeth.push({
        date: new Date().setSeconds(i - 30),
        value: Math.abs(visits),
      })
    }

    for (i = 0; i <= 80; i++) {
      visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
      dataltc.push({
        date: new Date().setSeconds(i - 30),
        value: Math.abs(visits),
      })
    }
    chart.invalidateRawData()
    if (this.props.databtc) {
      chart.addData(this.props.databtc)
    }
    if (this.props.dataeth) {
      chart.addData(this.props.dataeth)
    }
    if (this.props.dataltc) {
      chart.addData(this.props.dataltc)
    }
    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.startLocation = 0.6
    dateAxis.endLocation = 0.4
    dateAxis.renderer.opposite = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.inside = true

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = "value"
    series.dataFields.dateX = "date"
    series.strokeWidth = 2
    series.tooltipText = "{valueY.value}"
    series.strokeWidth = 3
    series.fillOpacity = 1
    series.tooltip.getFillFromObject = false
    series.tooltip.background.fill = am4core.color("#f44336")

    const gradient = new am4core.LinearGradient()
    gradient.addColor(am4core.color("#f44336"), 0.2)
    gradient.addColor(am4core.color("#f44336"), 0)
    gradient.rotation = 90
    series.fill = gradient
    series.stroke = am4core.color("#f44336")

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

CryptoShartStatics.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  databtc: PropTypes.array,
  dataeth: PropTypes.array,
  dataltc: PropTypes.array,
}
CryptoShartStatics.defaultProps = {
  width: "100%",
}

export default CryptoShartStatics
