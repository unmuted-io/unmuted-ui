import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import SalesReportStatics from "../../amChart/staticsXYChart/salesReportStatics"

class SalesReportCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Sales Report</h5>
        </CardHeader>
        <CardBody>
          <SalesReportStatics height="160px" />
          <Row className="mt-3 d-flex align-items-center text-center">
            <Col>
              <h6>$1000</h6>
              <span>Target</span>
            </Col>
            <Col>
              <h6>$985</h6>
              <span>Last week</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default SalesReportCard
