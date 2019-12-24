// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class MarketSalesStatics extends PureComponent {
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
        facebook: 23.5,
        twitter: 40.5,
        youtube: 23.5,
      },
      {
        city: "2",
        facebook: 26.2,
        twitter: 46.5,
        youtube: 26.2,
      },
      {
        city: "3",
        facebook: 28.1,
        twitter: 48.5,
        youtube: 28.1,
      },
      {
        city: "4",
        facebook: 28.9,
        twitter: 42.5,
        youtube: 28.9,
      },
      {
        city: "5",
        facebook: 24.6,
        twitter: 52.5,
        youtube: 28.9,
      },
      {
        city: "6",
        facebook: 25.2,
        twitter: 19.5,
        youtube: 25.2,
      },
      {
        city: "7",
        facebook: 28.1,
        twitter: 22.5,
        youtube: 28.1,
      },
      {
        city: "8",
        facebook: 29.5,
        twitter: 44.5,
        youtube: 29.5,
      },
      {
        city: "9",
        facebook: 24.6,
        twitter: 35.5,
        youtube: 24.6,
      },
      {
        city: "10",
        facebook: 26.2,
        twitter: 42.5,
        youtube: 26.2,
      },
      {
        city: "11",
        facebook: 29.1,
        twitter: 44.5,
        youtube: 29.1,
      },
      {
        city: "12",
        facebook: 29.5,
        twitter: 40.5,
        youtube: 29.5,
      },
      {
        city: "13",
        facebook: 24.6,
        twitter: 53.5,
        youtube: 24.6,
      },
      {
        city: "14",
        facebook: 26.2,
        twitter: 45.5,
        youtube: 26.2,
      },
      {
        city: "15",
        facebook: 29.1,
        twitter: 30.5,
        youtube: 29.1,
      },
      {
        city: "16",
        facebook: 29.5,
        twitter: 43.5,
        youtube: 29.5,
      },
      {
        city: "17",
        facebook: 24.6,
        twitter: 48.5,
        youtube: 24.6,
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
    series.dataFields.valueY = "youtube"
    series.dataFields.categoryX = "city"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "youtube : {valueY.value}"
    series.columns.template.fill = am4core.color("#E0291D")
    series.columns.template.stroke = am4core.color("#E0291D")
    series.columns.template.column.fillOpacity = 1
    series.columns.template.column.strokeOpacity = 1
    series.stacked = true

    series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = "facebook"
    series.dataFields.categoryX = "city"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "facebook : {valueY.value}"
    series.columns.template.fill = am4core.color("#3C5A99")
    series.columns.template.stroke = am4core.color("#3C5A99")
    series.stacked = true

    series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = "twitter"
    series.dataFields.categoryX = "city"
    series.columns.template.height = am4core.percent(90)
    series.tooltipText = "twitter : {valueY.value}"
    series.columns.template.fill = am4core.color("#42C0FB")
    series.columns.template.stroke = am4core.color("#42C0FB")
    series.columns.template.column.fillOpacity = 1
    series.columns.template.column.strokeOpacity = 1
    series.stacked = true

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
MarketSalesStatics.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
MarketSalesStatics.defaultProps = {
  width: "100%",
}

export default MarketSalesStatics
