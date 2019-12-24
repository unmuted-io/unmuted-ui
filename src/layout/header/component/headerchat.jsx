import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { connect } from 'react-redux';
import PerfectScrollbar from "react-perfect-scrollbar";
import { openChatBox } from '../../../redux/actions/chatActions';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  FormGroup,
  Label
} from "reactstrap";
import * as Icons from "react-feather";
import { Link } from "react-router-dom";
import ChatSearch from "../../../containers/chat/chatSearch";
import ChatList from "../../../containers/chat/chatListHeader";
import ChatContent from "../../../containers/chat/chatContentHeader";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div
          className={classnames("header-user-list", {
            open: this.props.openStatus
          })}
        >
          <Link
            to="#"
            className="h-close-text"
            onClick={() => this.props.openChatBox()}
          >
            <i className="feather icon-x"></i>
          </Link>
          <Fragment>
            <Nav className="nav-tabs">
              <NavItem>
                <NavLink
                  className={classnames("text-uppercase", {
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <Icons.MessageCircle className="mr-2" size={14} />
                  Chat
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames("text-uppercase", {
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  <Icons.Users className="mr-2" size={14} />
                  User
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames("text-uppercase", {
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  <Icons.Settings className="mr-2" size={14} />
                  Setting
                  </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ChatSearch />
                <div className="h-list-body">
                  <PerfectScrollbar>
                    <div
                      className="msg-user-list scroll-div"
                      style={{ height: "calc(100vh - 136px)" }}
                    >
                      <ChatList />
                    </div>
                  </PerfectScrollbar>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="h-list-body">
                  <div className="media px-3 d-flex align-items-center mt-3">
                    <Link className="media-left m-r-15" to="#">
                      <div className="hei-50 wid-50 bg-primary img-radius d-flex text-white align-items-center justify-content-center">
                        <Icons.Users size={22} />
                      </div>
                    </Link>
                    <div className="media-body">
                      <p className="chat-header f-w-600 mb-0">New Group</p>
                    </div>
                  </div>
                  <div className="media p-3 d-flex align-items-center">
                    <Link className="media-left m-r-15" to="#">
                      <div className="hei-50 wid-50 bg-primary img-radius d-flex text-white align-items-center justify-content-center">
                        <Icons.UserPlus size={22} />
                      </div>
                    </Link>
                    <div className="media-body">
                      <p className="chat-header f-w-600 mb-0">New Contact</p>
                    </div>
                  </div>
                  <PerfectScrollbar>
                    <div
                      className="msg-user-list scroll-div"
                      style={{ height: "calc(100vh - 214px)" }}
                    >
                      <ChatList />
                    </div>
                  </PerfectScrollbar>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <PerfectScrollbar>
                  <div className="p-4 main-friend-cont scroll-div">
                    <h6 className="mt-2">
                      <Icons.Monitor
                        size={16}
                        className=" mr-2"
                        style={{ marginTop: "-2px" }}
                      />
                      Desktop settings
                      </h6>
                    <hr />
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="switch1" defaultChecked />
                        <Label for="switch1" className="cr" />
                      </div>
                      <Label className="f-w-600">
                        Allow desktop notification
                        </Label>
                    </FormGroup>
                    <p className="text-muted ml-5">
                      you get lettest content at a time when data will updated
                      </p>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="switch2" />
                        <Label for="switch2" className="cr" />
                      </div>
                      <Label className="f-w-600">Store Cookie</Label>
                    </FormGroup>
                    <h6 className="mb-0 mt-5">
                      <Icons.Layout
                        size={16}
                        className="mr-2"
                        style={{ marginTop: "-2px" }}
                      />
                      Application settings
                      </h6>
                    <hr />
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="switch3" defaultChecked />
                        <Label for="switch3" className="cr" />
                      </div>
                      <Label className="f-w-600">Backup Storage</Label>
                    </FormGroup>
                    <p className="text-muted ml-5">
                      Automaticaly take backup as par schedule
                      </p>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="switch4" defaultChecked />
                        <Label for="switch4" className="cr" />
                      </div>
                      <Label className="f-w-600">
                        Allow guest to print file
                        </Label>
                    </FormGroup>
                    <h6 className="mb-0 mt-5">
                      <Icons.Globe
                        size={16}
                        className="mr-2"
                        style={{ marginTop: "-2px" }}
                      />
                      System settings
                      </h6>
                    <hr />
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="switch5" />
                        <Label for="switch5" className="cr" />
                      </div>
                      <Label className="f-w-600">View other user chat</Label>
                    </FormGroup>
                    <p className="text-muted ml-5">
                      Allow to show public user message
                      </p>
                  </div>
                </PerfectScrollbar>
              </TabPane>
            </TabContent>
          </Fragment>
          <ChatContent />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  openStatus: state.chatApp.chatBox
})
const mapDispatchToProps = {
  openChatBox
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
