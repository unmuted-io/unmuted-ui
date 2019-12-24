import React, { Component } from "react"
import { Card, CardHeader, CardBody, Table } from "reactstrap"
import { Chart, Pies, Transform } from "rumble-charts"

class BrowserStatesCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader className="borderless">
          <h5>Browser States</h5>
        </CardHeader>
        <CardBody className="px-0 py-0">
          <Table className="table-hover md-0" responsive>
            <tbody>
              <tr>
                <td>Google Chrome</td>
                <td>
                  <span className="text-right d-block m-0">
                    <span className="m-r-15">21%</span>
                    <Chart
                      width={23}
                      height={23}
                      series={[{ data: [7, 5] }]}
                      minY={0}
                    >
                      <Transform method={["transpose", "stack"]}>
                        <Pies
                          combined={true}
                          innerPadding="4%"
                          innerRadius="22%"
                          colors={["#2196f3", "#eeeeee"]}
                        />
                      </Transform>
                    </Chart>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Mozila Firefox</td>
                <td>
                  <span className="text-right d-block m-0">
                    <span className="m-r-15">76%</span>
                    <Chart
                      width={23}
                      height={23}
                      series={[{ data: [8, 3] }]}
                      minY={0}
                    >
                      <Transform method={["transpose", "stack"]}>
                        <Pies
                          combined={true}
                          innerPadding="4%"
                          innerRadius="22%"
                          colors={["#f44336", "#eeeeee"]}
                        />
                      </Transform>
                    </Chart>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Apple Safari</td>
                <td>
                  <span className="text-right d-block m-0">
                    <span className="m-r-15">20%</span>
                    <Chart
                      width={23}
                      height={23}
                      series={[{ data: [6, 5] }]}
                      minY={0}
                    >
                      <Transform method={["transpose", "stack"]}>
                        <Pies
                          combined={true}
                          innerPadding="4%"
                          innerRadius="22%"
                          colors={["#4caf50", "#eeeeee"]}
                        />
                      </Transform>
                    </Chart>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Internet Explorer</td>
                <td>
                  <span className="text-right d-block m-0">
                    <span className="m-r-15">23%</span>
                    <Chart
                      width={23}
                      height={23}
                      series={[{ data: [6, 2] }]}
                      minY={0}
                    >
                      <Transform method={["transpose", "stack"]}>
                        <Pies
                          combined={true}
                          innerPadding="4%"
                          innerRadius="22%"
                          colors={["#7759de", "#eeeeee"]}
                        />
                      </Transform>
                    </Chart>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Opera mini</td>
                <td>
                  <span className="text-right d-block m-0">
                    <span className="m-r-15">27%</span>
                    <Chart
                      width={23}
                      height={23}
                      series={[{ data: [7, 5] }]}
                      minY={0}
                    >
                      <Transform method={["transpose", "stack"]}>
                        <Pies
                          combined={true}
                          innerPadding="4%"
                          innerRadius="22%"
                          colors={["#FF9800", "#eeeeee"]}
                        />
                      </Transform>
                    </Chart>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
}

export default BrowserStatesCard
