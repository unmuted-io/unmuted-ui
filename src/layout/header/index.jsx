import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import windowSize from 'react-window-size';
import Notification from './component/notification'
import Path from '../../configure';
import { openChatBox } from '../../redux/actions/chatActions';
import UserProfile from './component/userprofile';
import MainSearch from './component/search';
import Breadcrumb from '../breadcrumb/breadcrumb';

class Header extends Component {
  state = {
    navOpen: true
  }
  toggle = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }
  componentWillMount() {
    if (this.props.windowWidth < 992) {
      this.setState({ navOpen: true })
    }
  }
  render() {
    return (
      <header className={classnames("navbar pcoded-header navbar-expand-lg navbar-light", {
        "headerpos-fixed": this.props.headerFixed,
        "header-blue": this.props.bgHeader === "blue",
        "header-red": this.props.bgHeader === "red",
        "header-purple": this.props.bgHeader === "purple",
        "header-info": this.props.bgHeader === "info",
        "header-dark": this.props.bgHeader === "dark",
      })}>
        <div className="m-header">
          <Link
            to="#"
            style={{ zIndex: 9999 }}
            onClick={() => this.props.collapseMenuRes()}
            className={classnames("mobile-menu", {
              on: this.props.resMenu
            })}
          >
            <span></span>
          </Link>
          <Link to={Path.defaultPath} className="b-brand">
            <div className="b-bg">
              E
            </div>
            <span className="b-title">
              Elite Able
            </span>
          </Link>
        </div>
        <Link to="#" className="mobile-menu" id="mobile-header">
          <i className="feather icon-more-horizontal"></i>
        </Link>
        <div className="collapse navbar-collapse">
          <Link onClick={this.toggle} className="mob-toggler" to="#"></Link>
          {this.props.windowWidth < 992 ? (
            <React.Fragment>
              {this.props.layout !== "horizontal" ?
                (<ul className="navbar-nav mr-auto" style={{ display: `${!this.state.navOpen ? `none` : ``}` }}>
                  <li>
                    <div className="page-header">
                      <div className="page-block">
                        <Row className="align-items-center">
                          <Breadcrumb />
                        </Row>
                      </div>
                    </div>
                  </li>
                </ul>
                ) :
                null
              }
              <ul className="navbar-nav ml-auto" style={{ display: `${this.state.navOpen ? `none` : `block`}` }}>
                <li className="nav-item">
                  <MainSearch />
                </li>
                <li><Notification /></li>
                <li>
                  <Link
                    to="#"
                    className="displayChatbox"
                    onClick={() => this.props.openChatBox()}
                  >
                    <i className="icon feather icon-mail"></i>
                  </Link>
                </li>
                <li>
                  <UserProfile />
                </li>
              </ul>
            </React.Fragment>
          ) :
            (
              <React.Fragment>
                {
                  this.props.layout !== "horizontal" ?
                    (<ul className="navbar-nav mr-auto">
                      <li>
                        <div className="page-header">
                          <div className="page-block">
                            <Row className="align-items-center">
                              <Breadcrumb />
                            </Row>
                          </div>
                        </div>
                      </li>
                    </ul>) : null
                }
                < ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <MainSearch />
                  </li>
                  <li><Notification /></li>
                  <li>
                    <Link
                      to="#"
                      className="displayChatbox"
                      onClick={() => this.props.openChatBox()}
                    >
                      <i className="icon feather icon-mail"></i>
                    </Link>
                  </li>
                  <li>
                    <UserProfile />
                  </li>
                </ul>
              </React.Fragment>
            )
          }
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  navUpdate: state.Navigation.navUpdate
})
const mapDispatchToDispatch = {
  openChatBox
}

export default connect(mapStateToProps, mapDispatchToDispatch)(windowSize(Header));