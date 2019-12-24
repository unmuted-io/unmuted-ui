import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import StoreVisitorsStatics from "../../amChart/staticsXYChart/storeVisitorsStatics"

class StoreVisitorsCard extends Component {
  render() {
    const props = this.props
    return (
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <h5>{props.title}</h5>
            </Col>
            <Col className="text-right">
              <span>This Month</span>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row className="mb-2">
            <Col xs="auto">
              <h4 className="m-0">
                {props.day}
                <i className="feather icon-arrow-up text-c-green" />
              </h4>
              <span>Visits per Day</span>
            </Col>
            <Col xs="auto">
              <h4 className="m-0">
                {props.total}
                <i className="feather icon-arrow-down text-c-red" />
              </h4>
              <span>Total Visitors</span>
            </Col>
            <Col>
              <h4 className="m-0">
                {props.bounce}
                <i className="feather icon-arrow-up text-c-green" />
              </h4>
              <span>Bounce Rate</span>
            </Col>
          </Row>
          <StoreVisitorsStatics height="250px" />
        </CardBody>
      </Card>
    )
  }
}

export default StoreVisitorsCard
