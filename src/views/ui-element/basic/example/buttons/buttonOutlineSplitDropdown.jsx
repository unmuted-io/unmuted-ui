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

class SplitOutlineDropdownButton extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Split Dropdown Button</h5>
        </CardHeader>
        <CardBody>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <Button outline color="primary">
              Primary
            </Button>
            <DropdownToggle
              outline
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
            <Button outline color="secondary">
              Secondary
            </Button>
            <DropdownToggle
              outline
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
            <Button outline color="success">
              Success
            </Button>
            <DropdownToggle
              outline
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
            <Button outline color="danger">
              Danger
            </Button>
            <DropdownToggle
              outline
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
            <Button outline color="warning">
              Warning
            </Button>
            <DropdownToggle
              outline
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
            <Button outline color="info">
              Info
            </Button>
            <DropdownToggle
              outline
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

export default SplitOutlineDropdownButton;
