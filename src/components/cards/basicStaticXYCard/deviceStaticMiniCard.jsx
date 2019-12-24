import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap"
import DeviceVisitStatics from "../../amChart/staticsXYChart/deviceVisitStatics"

class DeviceStaticMiniCard extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Row className="d-flex align-items-center">
            <Col className="pr-0">
              <span className="d-block mb-1">
                <i
                  className="fas fa-circle f-10 m-r-5"
                  style={{ color: "#a367dc" }}
                />
                Desktop [66.6%]
              </span>
              <span className="d-block mb-1">
                <i
                  className="fas fa-circle f-10 m-r-5"
                  style={{ color: "#67b7dc" }}
                />
                Mobile [29.7%]
              </span>
              <span className="d-block">
                <i
                  className="fas fa-circle f-10 m-r-5"
                  style={{ color: "#6771dc" }}
                />
                Tablet [38.6%]
              </span>
            </Col>
            <Col>
              <DeviceVisitStatics height="140px" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default DeviceStaticMiniCard
