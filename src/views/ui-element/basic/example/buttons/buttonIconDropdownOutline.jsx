// import external modules
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import * as Icons from "react-feather";

class ButtonIconDropdownOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Basic Icon Dropdown</h5>
        </CardHeader>
        <CardBody>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle outline className="drp-icon" caret color="primary">
              <Icons.ThumbsUp size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle
              outline
              className="drp-icon"
              caret
              color="secondary"
            >
              <Icons.Camera size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle outline className="drp-icon" caret color="success">
              <Icons.CheckCircle size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle outline className="drp-icon" caret color="danger">
              <Icons.Slash size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle outline className="drp-icon" caret color="warning">
              <Icons.AlertTriangle size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle outline className="drp-icon" caret color="info">
              <Icons.Info size={14} />
            </DropdownToggle>
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

export default ButtonIconDropdownOutline;
