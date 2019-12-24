// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class LineChartStatics extends PureComponent {
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

    chart.data = this.props.data

    //create category axis for years
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = "city"
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.cellStartLocation = 0.15
    categoryAxis.renderer.cellEndLocation = 0.85
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.renderer.inside = true
    categoryAxis.renderer.labels.template.disabled = true

    //create value axis for income and expenses
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true

    //create columns
    const series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = "income"
    series.dataFields.categoryX = "city"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "Income in : {valueY.value}"
    series.columns.template.fill = am4core.color(this.props.colorCode)
    series.columns.template.stroke = am4core.color(this.props.colorCode)

    //add chart cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.behavior = "zoomY"
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
        style={{
          width: this.props.width,
          height: this.props.height,
          position: "relative",
        }}
      />
    )
  }
}

LineChartStatics.propTypes = {
  data: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  colorCode: PropTypes.string,
}
LineChartStatics.defaultProps = {
  width: "100%",
  colorCode: "#7759de",
}

export default LineChartStatics
