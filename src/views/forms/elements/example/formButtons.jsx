import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
  InputGroupAddon
} from "reactstrap";

class FormButtons extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown1 = this.toggleDropDown1.bind(this);
    this.toggleDropDown2 = this.toggleDropDown2.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  }
  toggleDropDown2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <Button color="primary">Button</Button>
            </InputGroupAddon>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder="Recipient's username" />
            <InputGroupAddon addonType="append">
              <Button color="primary">Button</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <Button color="primary">Button</Button>
              <Button>Button</Button>
            </InputGroupAddon>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder="Recipient's username" />
            <InputGroupAddon addonType="append">
              <Button>Button</Button>
              <Button color="primary">Button</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={6}>
          <h5 className="mt-5">Buttons With Dropdowns</h5>
          <hr />
          <InputGroup className="mb-3">
            <InputGroupButtonDropdown
              addonType="prepend"
              isOpen={this.state.dropdownOpen1}
              toggle={this.toggleDropDown1}
            >
              <DropdownToggle caret color="primary">
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={this.state.dropdownOpen2}
              toggle={this.toggleDropDown2}
            >
              <DropdownToggle caret color="primary">
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
        </Col>
        <Col md={6}>
          <h5 className="mt-5">Segmented Buttons</h5>
          <hr />
          <InputGroup className="mb-3">
            <InputGroupButtonDropdown
              addonType="prepend"
              isOpen={this.state.splitButtonOpen}
              toggle={this.toggleSplit}
            >
              <Button>Action</Button>
              <DropdownToggle split />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={this.state.dropdownOpen2}
              toggle={this.toggleDropDown2}
            >
              <DropdownToggle caret color="primary">
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}

export default FormButtons;
