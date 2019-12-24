// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class SitTrafficLineChart extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end
    const chart = am4core.create(this.chartDB.current, am4charts.XYChart)
    chart.hiddenState.properties.opacity = 0 // this creates initial fade-in

    chart.data = this.props.trafficData

    chart.dateFormatter.inputDateFormat = "YYYY-MM-dd"
    chart.zoomOutButton.disabled = true

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.strokeOpacity = 0
    dateAxis.renderer.minGridDistance = 10
    dateAxis.dateFormats.setKey("day", "d")
    dateAxis.tooltip.hiddenState.properties.opacity = 1
    dateAxis.tooltip.hiddenState.properties.visible = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.fillOpacity = 0.3
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.min = 0

    // goal guides
    const axisRange = valueAxis.axisRanges.create()
    axisRange.value = 6000
    axisRange.grid.strokeOpacity = 0.1
    axisRange.label.text = "Session"
    axisRange.label.align = "right"
    axisRange.label.verticalCenter = "bottom"
    axisRange.label.fillOpacity = 0.8

    valueAxis.renderer.gridContainer.zIndex = 1

    const axisRange2 = valueAxis.axisRanges.create()
    axisRange2.value = 12000
    axisRange2.grid.strokeOpacity = 0.1
    axisRange2.label.text = "2x Session"
    axisRange2.label.align = "right"
    axisRange2.label.verticalCenter = "bottom"
    axisRange2.label.fillOpacity = 0.8

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = "steps"
    series.dataFields.dateX = "date"
    series.tooltipText = "{valueY.value}"

    const columnTemplate = series.columns.template
    columnTemplate.width = am4core.percent(50)
    columnTemplate.strokeOpacity = 0

    columnTemplate.adapter.add("fill", (fill, target) => {
      let dataItem = target.dataItem
      if (dataItem.valueY > 6000) {
        return am4core.color("#2196f3")
      } else {
        return am4core.color("#7759de")
      }
    })

    const cursor = new am4charts.XYCursor()
    cursor.behavior = "panX"
    chart.cursor = cursor

    chart.events.on("datavalidated", function() {
      dateAxis.zoomToDates(
        new Date(2018, 0, 11),
        new Date(2018, 1, 1),
        false,
        true,
      )
    })

    chart.scrollbarX = new am4core.Scrollbar()
    chart.scrollbarX.parent = chart.bottomAxesContainer
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
SitTrafficLineChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  trafficData: PropTypes.array,
}
SitTrafficLineChart.defaultProps = {
  width: "100%",
}

export default SitTrafficLineChart
