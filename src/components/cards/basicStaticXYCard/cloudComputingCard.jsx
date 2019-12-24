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
import CloudComputingStatics from "../../amChart/staticsXYChart/cloudComputingStatics"

class CloudComputingCard extends Component {
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
        <CardBody className="pb-0">
          <Row>
            <Col xs="auto">
              <h6>{props.title}</h6>
            </Col>
            <Col>
              <Dropdown
                className="float-righ"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle
                  caret
                  className="text-c-blue"
                  style={{ cursor: "pointer" }}
                  tag="span"
                >
                  Daily
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>1 Week</DropdownItem>
                  <DropdownItem>2 year</DropdownItem>
                  <DropdownItem>3 month</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col xl="auto">
              <span className="d-block">
                <i className="fas fa-circle text-c-blue f-10 m-r-10" />
                Storage
              </span>
              <h6 className="ml-3 mt-1">10.5 GB</h6>
            </Col>
            <Col>
              <span className="d-block">
                <i className="fas fa-circle text-c-purple f-10 m-r-10" />
                Bandwidth
              </span>
              <h6 className="ml-3 mt-1">50 GB</h6>
            </Col>
          </Row>
        </CardBody>
        <CloudComputingStatics height="95px" />
      </Card>
    )
  }
}

export default CloudComputingCard
