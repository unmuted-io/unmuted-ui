import React, { Component } from "react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import * as Icons from "react-feather";

class EmailAction extends Component {
  render() {
    return (
      <div className="email-btn">
        <Button outline className="btn-icon btn-rounded">
          <Icons.AlertCircle size={14} />
        </Button>
        <Button outline className="btn-icon btn-rounded">
          <Icons.Inbox size={14} />
        </Button>
        <Button
          onClick={() => this.props.trashEmail(this.props.id)}
          outline
          className="btn-icon btn-rounded"
        >
          <Icons.Trash2 size={14} />
        </Button>
        <UncontrolledDropdown className="mb-2 mr-2 btn-group">
          <DropdownToggle className="drp-icon btn-rounded" caret outline>
            <Icons.LogOut size={14} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Move to</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Social</DropdownItem>
            <DropdownItem>Promotion</DropdownItem>
            <DropdownItem>Update</DropdownItem>
            <DropdownItem>Forum</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="mb-2 mr-2 btn-group">
          <DropdownToggle className="drp-icon btn-rounded" caret outline>
            <Icons.MoreVertical size={14} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Mark as unread</DropdownItem>
            <DropdownItem>Mark as important</DropdownItem>
            <DropdownItem>Mark as not important</DropdownItem>
            <DropdownItem>Filter messages like these</DropdownItem>
            <DropdownItem>Mute</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default EmailAction;
