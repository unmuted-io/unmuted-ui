// import external modules
import React, { PureComponent, createRef } from "react"
import PropTypes from "prop-types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

class CompletedTicket extends PureComponent {
  constructor(props) {
    super(props)
    this.chartDB = createRef()
  }
  componentDidMount() {
    // template begin
    am4core.useTheme(am4themes_animated)
    // template end

    // create chart
    const chart = am4core.create(this.chartDB.current, am4charts.GaugeChart)
    chart.innerRadius = am4core.percent(82)

    let axis = chart.xAxes.push(new am4charts.ValueAxis())
    axis.min = 0
    axis.max = 100
    axis.strictMinMax = true
    axis.renderer.radius = am4core.percent(80)
    axis.renderer.inside = true
    axis.renderer.line.strokeOpacity = 0
    axis.renderer.ticks.template.strokeOpacity = 1
    axis.renderer.ticks.template.length = 10
    axis.renderer.grid.template.disabled = true
    axis.renderer.labels.template.radius = 40
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return ""
    })


    let axis2 = chart.xAxes.push(new am4charts.ValueAxis())
    axis2.min = 0
    axis2.max = 100
    axis2.renderer.innerRadius = 10
    axis2.strictMinMax = true
    axis2.renderer.labels.template.disabled = true
    axis2.renderer.ticks.template.disabled = true
    axis2.renderer.grid.template.disabled = true

    const range0 = axis2.axisRanges.create()
    range0.value = 0
    range0.endValue = 50
    range0.axisFill.fillOpacity = 1
    range0.axisFill.fill = "#2196f3"

    const range1 = axis2.axisRanges.create()
    range1.value = 50
    range1.endValue = 100
    range1.axisFill.fillOpacity = 1
    range1.axisFill.fill = "#eff3f6"

    const label = chart.radarContainer.createChild(am4core.Label)
    label.isMeasured = false
    label.fontSize = 18
    label.x = am4core.percent(50)
    label.y = am4core.percent(100)
    label.horizontalCenter = "middle"
    label.verticalCenter = "bottom"
    label.text = "50%"

    const label2 = chart.radarContainer.createChild(am4core.Label)
    label2.isMeasured = false
    label2.fontSize = 12
    label2.x = am4core.percent(50)
    label2.y = am4core.percent(100)
    label2.horizontalCenter = "middle"
    label2.align = "center"
    label2.verticalCenter = "top"
    label2.text = "Complited Ticket"

    const hand = chart.hands.push(new am4charts.ClockHand())
    hand.axis = axis2
    hand.innerRadius = am4core.percent(20)
    hand.startWidth = 0
    hand.pin.disabled = true
    hand.value = 50
    hand.disabled = true

    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value
      range1.value = ev.target.value
      axis2.invalidate()
    })
    setInterval(() => {
      let value = Math.round(Math.random() * 100)
      label.text = value + "%"
      new am4core.Animation(
        hand,
        {
          property: "value",
          to: value,
        },
        1000,
        am4core.ease.cubicOut,
      ).start()
    }, 2000)
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

CompletedTicket.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
CompletedTicket.defaultProps = {
  width: "100%",
}

export default CompletedTicket
