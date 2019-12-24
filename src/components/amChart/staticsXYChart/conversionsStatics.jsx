// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class ConversionsStaics extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    let chart = am4core.create(this.chartDB.current, am4charts.XYChart)

    chart.data = [
      {
        city: "USA",
        income: 23.5,
        expenses: 18.1,
        profit: 25.5,
      },
      {
        city: "India",
        income: 26.2,
        expenses: 22.8,
        profit: 18.5,
      },
      {
        city: "China",
        income: 29.1,
        expenses: 23.9,
        profit: 20.5,
      },
      {
        city: "Brazil",
        income: 29.5,
        expenses: 25.1,
        profit: 19.1,
      },
      {
        city: "Africa",
        income: 24.6,
        expenses: 10,
        profit: 0,
      },
    ]

    //create category axis for years
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = "city"
    categoryAxis.renderer.inversed = true
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.cellStartLocation = 0.15
    categoryAxis.renderer.cellEndLocation = 0.85
    categoryAxis.renderer.grid.template.strokeOpacity = 0

    //create value axis for income and expenses
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.strokeOpacity = 0.1

    //create columns
    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.categoryY = "city"
    series.dataFields.valueX = "income"
    series.name = "Income"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "Income in {categoryY}: {valueX.value}"
    series.columns.template.fill = am4core.color("#f44336")
    series.columns.template.stroke = am4core.color("#f44336")

    let series2 = chart.series.push(new am4charts.ColumnSeries())
    series2.dataFields.categoryY = "city"
    series2.dataFields.valueX = "expenses"
    series2.columns.template.height = am4core.percent(90)
    series2.name = "Expenses"
    series2.tooltipText = "Expenses in {categoryY}: {valueX.value}"
    series2.columns.template.fill = am4core.color("#2196f3")
    series2.columns.template.stroke = am4core.color("#2196f3")

    let series3 = chart.series.push(new am4charts.ColumnSeries())
    series3.dataFields.categoryY = "city"
    series3.dataFields.valueX = "profit"
    series3.columns.template.height = am4core.percent(90)
    series3.name = "Expenses"
    series3.tooltipText = "Expenses in {categoryY}: {valueX.value}"
    series3.columns.template.fill = am4core.color("#4caf50")
    series3.columns.template.stroke = am4core.color("#4caf50")

    //add chart cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.behavior = "zoomY"

    //add legend
    chart.legend = new am4charts.Legend()
    chart.legend.position = "top"

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
        }}
      />
    )
  }
}

ConversionsStaics.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
ConversionsStaics.defaultProps = {
  width: "100%",
}

export default ConversionsStaics
