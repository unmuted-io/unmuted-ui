// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

class SplitDropdownButton extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Split Dropdown Button</h5>
        </CardHeader>
        <CardBody>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="primary">Primary</Button>
            <DropdownToggle
              caret
              color="primary"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="secondary">Secondary</Button>
            <DropdownToggle
              caret
              color="secondary"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="success">Success</Button>
            <DropdownToggle
              caret
              color="success"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="danger">Danger</Button>
            <DropdownToggle
              caret
              color="danger"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="warning">Warning</Button>
            <DropdownToggle
              caret
              color="warning"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button color="info">Info</Button>
            <DropdownToggle
              caret
              color="info"
              className="dropdown-toggle-split"
            />
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
      </Card>
    );
  }
}

export default SplitDropdownButton;
