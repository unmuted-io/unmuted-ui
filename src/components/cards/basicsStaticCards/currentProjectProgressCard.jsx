import React, { Component } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import { Chart, Pies, Transform } from "rumble-charts"

class CurrentProjectProgressCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Current project progress</h5>
        </CardHeader>
        <CardBody>
          <h6 className="mb-3">
            <Chart
              width={23}
              height={23}
              series={[{ data: [226, 134] }]}
              minY={0}
            >
              <Transform method={["transpose", "stack"]}>
                <Pies combined={true} colors={["#2196f3", "#eeeeee"]} />
              </Transform>
            </Chart>
            <span className="m-l-10">AFSL web app</span>
          </h6>
          <h6 className="mb-3">
            <Chart width={23} height={23} series={[{ data: [4, 1] }]} minY={0}>
              <Transform method={["transpose", "stack"]}>
                <Pies combined={true} colors={["#2196f3", "#eeeeee"]} />
              </Transform>
            </Chart>
            <span className="m-l-10">Norttech website</span>
          </h6>
          <h6 className="mb-0">
            <Chart width={23} height={23} series={[{ data: [3, 1] }]} minY={0}>
              <Transform method={["transpose", "stack"]}>
                <Pies combined={true} colors={["#2196f3", "#eeeeee"]} />
              </Transform>
            </Chart>
            <span className="m-l-10">Maestro iris attendance</span>
          </h6>
        </CardBody>
      </Card>
    )
  }
}

export default CurrentProjectProgressCard
