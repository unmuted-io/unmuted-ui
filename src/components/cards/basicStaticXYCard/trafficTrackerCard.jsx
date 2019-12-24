import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import SalesReportStatics from "../../amChart/staticsXYChart/salesReportStatics"
import SalesReportStaticsRed from "../../amChart/staticsXYChart/salesReportStaticsRed"

class TrafficTrackerCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <h6>{this.props.title}</h6>
          <Row className="mt-2">
            <Col>
              <span className="d-block text-uppercase">Inbound</span>
              <h3 className="mt-1">180 GB</h3>
              <SalesReportStatics height="55px" />
            </Col>
            <Col>
              <span className="d-block text-uppercase">Outbound</span>
              <h3 className="mt-1">597.1 GB</h3>
              <SalesReportStaticsRed height="55px" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default TrafficTrackerCard
