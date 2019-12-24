import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class MarketingCampaignStatic extends PureComponent {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end
    // Create chart instance
    let chart = am4core.create(this.chartDB.current, am4charts.PieChart)
    // Add data
    chart.data = [
      {
        sector: "Incoming requests",
        size: 8,
      },
      {
        sector: "Intial contact",
        size: 14.6,
      },
      {
        sector: "Offer made",
        size: 22.5,
      },
      {
        sector: "Negotiation",
        size: 8,
      },
      {
        sector: "Contract",
        size: 14.6,
      },
      {
        sector: "Won leads",
        size: 22.5,
      },
    ]
    // Add label
    chart.innerRadius = 60

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = "size"
    pieSeries.dataFields.category = "sector"
    pieSeries.labels.template.disabled = true
    pieSeries.ticks.template.disabled = true
    pieSeries.colors.step = 3
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
MarketingCampaignStatic.propTypes = {
  height: PropTypes.string,
}

export default MarketingCampaignStatic
