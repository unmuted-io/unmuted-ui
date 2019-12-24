import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TimeSiteStatics from "../../amChart/staticsXYChart/timeSiteStatics"

class TimeSiteCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Time on Site</h5>
        </CardHeader>
        <CardBody>
          <TimeSiteStatics height="225px" />
          <Row className="mt-2">
            <Col>
              <span className="text-muted">
                <FontAwesomeIcon
                  icon="circle"
                  className="text-c-green f-10 m-r-10"
                />
                Time on site
              </span>
            </Col>
            <Col className="text-right">
              <span className="text-muted">1:31</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default TimeSiteCard
