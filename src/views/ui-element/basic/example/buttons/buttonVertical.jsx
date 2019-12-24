// import external modules
import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

class ButtonVertical extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Vertical Variation</h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="4">
              <ButtonGroup vertical>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
              </ButtonGroup>
            </Col>
            <Col sm="8">
              <ButtonGroup vertical>
                <Button>1</Button>
                <Button>2</Button>
                <ButtonDropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Dropdown link</DropdownItem>
                    <DropdownItem>Dropdown link</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonVertical;
