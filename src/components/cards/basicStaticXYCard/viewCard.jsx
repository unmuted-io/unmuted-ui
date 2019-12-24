import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ViewStatics from "../../amChart/staticsXYChart/viewStatics"

class ViewCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col>
              <h3>4856</h3>
            </Col>
            <Col className="text-right">
              <span>Views</span>
            </Col>
          </Row>
        </CardBody>
        <ViewStatics height="87px" />
      </Card>
    )
  }
}

export default ViewCard
