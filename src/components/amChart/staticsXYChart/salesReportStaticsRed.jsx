// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class SalesReportStaticsRed extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // Create chart instance
    let chart = am4core.create(this.chartDB.current, am4charts.XYChart)

    chart.data = [
      {
        city: "1",
        income: 23.5,
      },
      {
        city: "2",
        income: 26.2,
      },
      {
        city: "3",
        income: 28.1,
      },
      {
        city: "4",
        income: 28.9,
      },
      {
        city: "5",
        income: 24.6,
      },
      {
        city: "6",
        income: 25.2,
      },
      {
        city: "7",
        income: 28.1,
      },
      {
        city: "8",
        income: 29.5,
      },
      {
        city: "9",
        income: 24.6,
      },
      {
        city: "10",
        income: 26.2,
      },
      {
        city: "11",
        income: 29.1,
      },
      {
        city: "12",
        income: 29.5,
      },
      {
        city: "13",
        income: 24.6,
      },
      {
        city: "14",
        income: 26.2,
      },
      {
        city: "15",
        income: 29.1,
      },
      {
        city: "15",
        income: 29.5,
      },
      {
        city: "17",
        income: 24.6,
      },
    ]

    //create category axis for years
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = "city"
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.cellStartLocation = 0.15
    categoryAxis.renderer.cellEndLocation = 0.85
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.renderer.inside = true
    categoryAxis.renderer.labels.template.disabled = true

    //create value axis for income and expenses
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true

    //create columns
    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = "income"
    series.dataFields.categoryX = "city"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "Income in : {valueY.value}"
    series.columns.template.fill = am4core.color("#f44336")
    series.columns.template.stroke = am4core.color("#f44336")

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
        style={{ width: this.props.width, height: this.props.height }}
      />
    )
  }
}
SalesReportStaticsRed.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
SalesReportStaticsRed.defaultProps = {
  width: "100%",
}

export default SalesReportStaticsRed
