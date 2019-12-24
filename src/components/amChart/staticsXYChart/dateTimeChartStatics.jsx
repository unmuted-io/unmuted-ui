// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class DateTimeChartStatics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    const chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    chart.maskBullets = false

    const xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    const yAxis = chart.yAxes.push(new am4charts.CategoryAxis())

    xAxis.dataFields.category = "weekday"
    yAxis.dataFields.category = "hour"

    xAxis.renderer.grid.template.disabled = true
    xAxis.renderer.minGridDistance = 40

    yAxis.renderer.grid.template.disabled = true
    yAxis.renderer.inversed = true
    yAxis.renderer.minGridDistance = 30

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.categoryX = "weekday"
    series.dataFields.categoryY = "hour"
    series.dataFields.value = "value"
    series.sequencedInterpolation = true
    series.defaultState.transitionDuration = 3000

    const bgColor = new am4core.InterfaceColorSet().getFor("background")

    const columnTemplate = series.columns.template
    columnTemplate.strokeWidth = 1
    columnTemplate.strokeOpacity = 0.2
    columnTemplate.stroke = bgColor
    columnTemplate.tooltipText =
      "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}"
    columnTemplate.width = am4core.percent(100)
    columnTemplate.height = am4core.percent(100)

    series.heatRules.push({
      target: series.columns.template,
      property: "fill",
      min: am4core.color("#ffffff"),
      max: am4core.color("#7759de"),
    })

    // heat legend
    const heatLegend = chart.bottomAxesContainer.createChild(
      am4charts.HeatLegend,
    )
    heatLegend.width = am4core.percent(100)
    heatLegend.series = series
    heatLegend.valueAxis.renderer.labels.template.fontSize = 9
    heatLegend.valueAxis.renderer.minGridDistance = 30

    // heat legend behavior
    series.columns.template.events.on("over", event => {
      handleHover(event.target)
    })

    series.columns.template.events.on("hit", event => {
      handleHover(event.target)
    })

    function handleHover(column) {
      if (!isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
      } else {
        heatLegend.valueAxis.hideTooltip()
      }
    }

    series.columns.template.events.on("out", event => {
      heatLegend.valueAxis.hideTooltip()
    })

    chart.data = this.props.data
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

DateTimeChartStatics.propTypes = {
  data: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
}
DateTimeChartStatics.defaultProps = {
  width: "100%",
}

export default DateTimeChartStatics
