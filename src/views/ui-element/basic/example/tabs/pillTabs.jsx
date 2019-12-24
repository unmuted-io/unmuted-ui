// import external modules
import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

class PillTabs extends Component {
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
        <Nav pills className="mb-3">
          <NavItem>
            <NavLink
              className={classnames("nav-link text-uppercase", {
                active: this.state.activeTab === "1"
              })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames("nav-link text-uppercase", {
                active: this.state.activeTab === "2"
              })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames("nav-link text-uppercase", {
                active: this.state.activeTab === "3"
              })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <p className="mb-0">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit, blog
              sartorial PBR leggings next level wes anderson artisan four loko
              farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
              vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
              magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
              velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
              anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa
              terry richardson biodiesel. Art party scenester stumptown, tumblr
              butcher vero sint qui sapiente accusamus tattooed echo park.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <p className="mb-0">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit, blog
              sartorial PBR leggings next level wes anderson artisan four loko
              farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
              vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
              magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
              velit sapiente labore stumptown.
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p className="mb-0">
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla
              single-origin coffee squid. Exercitation +1 labore velit, blog
              sartorial PBR leggings next level wes anderson artisan four loko
              farm-to-table craft beer twee. Qui photo booth letterpress,
              commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
              vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic
              magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
              velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
              anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa
              terry richardson biodiesel.
            </p>
          </TabPane>
        </TabContent>
      </Fragment>
    );
  }
}

export default PillTabs;
