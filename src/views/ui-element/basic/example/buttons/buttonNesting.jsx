// import external modules
import React, { Component } from "react";
import {
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

class ButtonNesting extends Component {
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
          <h5>Nesting</h5>
        </CardHeader>
        <CardBody>
          <ButtonGroup>
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
        </CardBody>
      </Card>
    );
  }
}

export default ButtonNesting;
