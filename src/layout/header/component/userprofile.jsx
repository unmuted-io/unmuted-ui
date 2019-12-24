import React, { Fragment } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/user/avatar-1.jpg";

const UserProfile = () => (
  <Fragment>
    <UncontrolledDropdown className="drp-user">
      <DropdownToggle tag="a" href="#" className="dropdown-toggle">
        <i className="icon feather icon-settings"></i>
      </DropdownToggle>
      <DropdownMenu right className="profile-notification">
        <div className="pro-head">
          <img src={avatar} className="img-radius" alt="User-Profile" />
          <span>John Doe</span>
          <Link to="#" className="dud-logout" title="Logout">
            <i className="feather icon-log-out" />
          </Link>
        </div>
        <ul className="pro-body">
          <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-settings" /> Settings
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-user" /> Profile
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-mail" /> My Messages
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item">
              <i className="feather icon-lock" /> Lock Screen
            </Link>
          </li>
        </ul>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Fragment>
);

export default UserProfile;
