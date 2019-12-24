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
import CompletedTicket from "../../amChart/staticsXYChart/complitedTicketStatics"

class SupportAnlyticCard extends Component {
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
            <Col>
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
                  Last 5 month
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>1 Week</DropdownItem>
                  <DropdownItem>2 Week</DropdownItem>
                  <DropdownItem>4 Year</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="mt-2 mb-0">{props.static}</h2>
              <span className="">Ticket</span>
              <h6 className="mb-0 mt-3">
                Close: <span className="text-primary">{props.close}</span>
              </h6>
              <h6>
                Response <span className="text-danger">{props.response}</span>
              </h6>
            </Col>
            <Col>
              <CompletedTicket height="130px" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default SupportAnlyticCard
