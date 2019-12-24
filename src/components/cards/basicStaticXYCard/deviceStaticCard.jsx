import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import DeviceVisitStatics from "../../amChart/staticsXYChart/deviceVisitStatics"

class DeviceStaticCard extends Component {
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
    const props = this.props
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs="auto">
              <h6>{props.title}</h6>
            </Col>
            <Col>
              <Dropdown
                className="float-right"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle
                  caret
                  className="text-c-blue"
                  style={{ cursor: "pointer" }}
                  tag="span"
                >
                  Last 30 days
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>1 Week</DropdownItem>
                  <DropdownItem>2 year</DropdownItem>
                  <DropdownItem>4 month</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="pr-0">
              <h6 className="my-3">
                <i
                  className="feather icon-monitor f-20 mr-2"
                  style={{ color: "#dc67ce" }}
                />
                66.6%
                <span className="text-c-green ml-2 f-14">
                  <i className="feather icon-arrow-up" />
                  2%
                </span>
              </h6>
              <h6 className="my-3">
                <i
                  className="feather icon-tablet f-20 mr-2"
                  style={{ color: "#8067dc" }}
                />
                29.7%
                <span className="text-c-red ml-2 f-14">
                  <i className="feather icon-arrow-down" />
                  3%
                </span>
              </h6>
              <h6 className="my-3">
                <i
                  className="feather icon-smartphone f-20 mr-2"
                  style={{ color: "#67b7dc" }}
                />
                32.8%
                <span className="text-c-green ml-2 f-14">
                  <i className="feather icon-arrow-up" />
                  8%
                </span>
              </h6>
            </Col>
            <Col>
              <DeviceVisitStatics height="135px" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default DeviceStaticCard
