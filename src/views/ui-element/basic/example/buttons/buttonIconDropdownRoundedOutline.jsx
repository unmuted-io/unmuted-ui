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

class ButtonIconDropdownRoundedOutline extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Outline Rounded Icon Dropdown</h5>
        </CardHeader>
        <CardBody>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle
              className="drp-icon btn-rounded"
              caret
              color="primary"
              outline
            >
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
              className="drp-icon btn-rounded"
              caret
              color="secondary"
              outline
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
            <DropdownToggle
              className="drp-icon btn-rounded"
              caret
              color="success"
              outline
            >
              <Icons.CheckCircle size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle
              className="drp-icon btn-rounded"
              caret
              color="danger"
              outline
            >
              <Icons.Slash size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle
              className="drp-icon btn-rounded"
              caret
              color="warning"
              outline
            >
              <Icons.AlertTriangle size={14} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="mb-2 mr-2 btn-group">
            <DropdownToggle
              className="drp-icon btn-rounded"
              caret
              color="info"
              outline
            >
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

export default ButtonIconDropdownRoundedOutline;
