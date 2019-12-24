// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class CoreXYChartStatics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    const chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    chart.hiddenState.properties.opacity = 0
    // this creates initial fade-in

    chart.data = this.props.data

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.tooltip.disabled = true
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.inside = true
    dateAxis.startLocation = 0.1
    dateAxis.endLocation = 0.4
    dateAxis.renderer.grid.template.strokeDasharray = "10,5"
    dateAxis.renderer.grid.template.strokeOpacity = 0.1

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.inside = true
    valueAxis.renderer.grid.template.strokeDasharray = "10,5"
    valueAxis.renderer.grid.template.strokeOpacity = 0.1

    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = "date"
    series.dataFields.valueY = "plan"
    series.tooltipText = "Plan: {valueY.value}"
    series.name = "Plan"
    series.sequencedInterpolation = true
    series.stroke = am4core.color("#f44336")
    series.fill = am4core.color("#f44336")
    series.defaultState.transitionDuration = 1000
    series.tensionX = 0.7
    series.fillOpacity = 1

    const series2 = chart.series.push(new am4charts.LineSeries())
    series2.dataFields.dateX = "date"
    series2.dataFields.valueY = "actual"
    series2.tooltipText = "Actual: {valueY.value}"
    series2.name = "Actual"
    series2.sequencedInterpolation = true
    series2.defaultState.transitionDuration = 1500
    series2.stroke = am4core.color("#7759de")
    series2.fill = am4core.color("#7759de")
    series2.tensionX = 0.7
    series2.fillOpacity = 1

    const series3 = chart.series.push(new am4charts.LineSeries())
    series3.dataFields.dateX = "date"
    series3.dataFields.valueY = "grothactual"
    series3.tooltipText = "Groth Actual: {valueY.value}"
    series3.name = "Groth Actual"
    series3.sequencedInterpolation = true
    series3.defaultState.transitionDuration = 1500
    series3.stroke = am4core.color("#4caf50")
    series3.fill = am4core.color("#4caf50")
    series3.tensionX = 0.7
    series3.fillOpacity = 1

    chart.cursor = new am4charts.XYCursor()
    chart.cursor.xAxis = dateAxis

    //add legend
    chart.legend = new am4charts.Legend()
    chart.legend.position = "top"

    chart.seriesContainer.zIndex = 1050

    chart.padding(5, 0, -5, -5)

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

CoreXYChartStatics.propTypes = {
  data: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
}
CoreXYChartStatics.defaultProps = {
  width: "100%",
}

export default CoreXYChartStatics
