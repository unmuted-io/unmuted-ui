import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "reactstrap"
import TotalRevenueStatics from "../../amChart/staticsXYChart/totalRevenueStatics"

class TotalRevenueCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Total Revenue</h5>
        </CardHeader>
        <CardBody>
          <TotalRevenueStatics height="175px" />
          <span className="text-center mt-3 text-muted d-block">
            Total sales made today
          </span>
        </CardBody>
        <CardFooter>
          <Row className="d-flex align-items-center text-center">
            <Col>
              <h6>$1258</h6>
              <span>Target</span>
            </Col>
            <Col>
              <h6>$975</h6>
              <span>Last week</span>
            </Col>
            <Col>
              <h6>$500</h6>
              <span>Last month</span>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    )
  }
}

export default TotalRevenueCard
