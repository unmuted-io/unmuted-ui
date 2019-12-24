import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import * as Icons from "react-feather";
import FilterEmail from "../../containers/email/filterEmails";
import { VisibilityFilters } from "../../redux/actions/emailActions";

class EmailSidebar extends Component {
  render() {
    return (
      <Nav pills vertical className="mb-2 nav-tab">
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_INBOX}>
            <span>
              <Icons.Inbox size={16} className="m-r-10" />
              Inbox
            </span>
            <span className="float-right">6</span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_STARRED}>
            <span>
              <Icons.Star size={16} className="m-r-10" />
              Starred
            </span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_DRAFTS}>
            <span>
              <Icons.FileText size={16} className="m-r-10" />
              Drafts
            </span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_SENT}>
            <span>
              <Icons.Navigation size={16} className="m-r-10" />
              Sent Mail
            </span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_TRASH}>
            <span>
              <Icons.Trash2 size={16} className="m-r-10" />
              Trash
            </span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_IMPORTANT}>
            <span>
              <Icons.Zap size={16} className="m-r-10" />
              Important
            </span>
          </FilterEmail>
        </NavItem>
        <NavItem className="mail-section">
          <FilterEmail filter={VisibilityFilters.SHOW_SPAM}>
            <span>
              <Icons.AlertTriangle size={16} className="m-r-10" />
              Spam
            </span>
          </FilterEmail>
        </NavItem>
      </Nav>
    );
  }
}

export default EmailSidebar;
