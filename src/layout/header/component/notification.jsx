// import external modules
import React, { Component } from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import { Link } from "react-router-dom"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// import internal(own) modules
import user1 from "../../../assets/images/user/avatar-1.jpg"
import user2 from "../../../assets/images/user/avatar-2.jpg"
import user3 from "../../../assets/images/user/avatar-3.jpg"
import user4 from "../../../assets/images/user/avatar-4.jpg"
import user5 from "../../../assets/images/user/avatar-5.jpg"

class Notification extends Component {
  render() {
    return (
      <UncontrolledDropdown >
        <DropdownToggle className="dropdown-toggle" tag="a" href="#!">
          <i className="icon feather icon-bell"></i>
        </DropdownToggle>
        <DropdownMenu right className="notification">
          <div className="noti-head">
            <h6 className="d-inline-block m-b-0">Notifications</h6>
            <div className="float-right">
              <Link to="#" className="m-r-10">mark as read</Link>
              <Link to="#">clear all</Link>
            </div>
          </div>
          <PerfectScrollbar className="noti-body" component="ul">
            <li className="n-title">
              <p className="m-b-0">NEW</p>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      5 min
                    </span>
                  </p>
                  <p>New ticket Added</p>
                </div>
              </div>
            </li>
            <li className="n-title">
              <p className="m-b-0">EARLIER</p>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user2} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>Joseph William</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      10 min
                    </span>
                  </p>
                  <p>Prchace New Theme and make payment</p>
                </div>
              </div>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user3} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>Sara Soudein</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      51 min
                    </span>
                  </p>
                  <p>currently login</p>
                </div>
              </div>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user4} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>Joseph William</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      15 min
                    </span>
                  </p>
                  <p>New ticket Added</p>
                </div>
              </div>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user5} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>Sara Soudein</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      18 min
                    </span>
                  </p>
                  <p>currently login</p>
                </div>
              </div>
            </li>
            <li className="notification">
              <div className="media">
                <img className="img-radius" src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span className="n-time text-muted">
                      <i className="icon feather icon-clock m-r-10"></i>
                      5 min
                    </span>
                  </p>
                  <p>New ticket Added</p>
                </div>
              </div>
            </li>
          </PerfectScrollbar>
          <div className="noti-footer">
            <Link to="#">show all</Link>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

export default Notification
