import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ActiveUsersStatics from "../../amChart/staticsXYChart/ActiveUsersStatics"

class ActiveUserCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col>
              <h3>678</h3>
            </Col>
            <Col className="text-right">
              <span>Active Users</span>
            </Col>
          </Row>
        </CardBody>
        <ActiveUsersStatics height="87px" />
      </Card>
    )
  }
}

export default ActiveUserCard
