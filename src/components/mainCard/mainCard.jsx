import React, { PureComponent } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import windowSize from "react-window-size";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainCard extends PureComponent {
  constructor(props) {
    super(props);
    this.cardReloadHandler = this.cardReloadHandler.bind(this);
    this.cardRemoveHandler = this.cardRemoveHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOption: this.props.isOption,
      isScroll: this.props.isScroll,
      fullCard: false,
      collapseCard: false,
      loadCard: false,
      cardRemove: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  cardReloadHandler() {
    this.setState({ loadCard: true });
    setInterval(() => {
      this.setState({ loadCard: false });
    }, 3000);
  }
  cardRemoveHandler() {
    this.setState({ cardRemove: true });
  }
  render() {
    let fullScreenStyle, loader, cardHeaderRight, cardHeader;
    let card = "";
    let cardClass = [];

    if (this.state.isOption) {
      cardHeaderRight = (
        <div className="card-header-right">
          <Dropdown
            className="card-option btn-group"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>
              <i className="feather icon-more-horizontal" />
            </DropdownToggle>
            <DropdownMenu right className="list-unstyled card-option">
              <DropdownItem
                tag="li"
                onClick={() => {
                  this.setState(prevState => {
                    return { fullCard: !prevState.fullCard };
                  });
                }}
              >
                <Link to="#">
                  <span>
                    <i
                      className={
                        this.state.fullCard
                          ? "feather icon-minimize"
                          : "feather icon-maximize"
                      }
                    />
                    {this.state.fullCard ? "Restore" : "Maximize"}
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem
                tag="li"
                onClick={() => {
                  this.setState(prevState => {
                    return { collapseCard: !prevState.collapseCard };
                  });
                }}
              >
                <Link to="#">
                  <span>
                    <i
                      className={
                        this.state.collapseCard
                          ? "feather icon-plus"
                          : "feather icon-minus"
                      }
                    />
                    {this.state.collapseCard ? "Expand" : "Collapse"}
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem tag="li" onClick={this.cardReloadHandler}>
                <Link to="#">
                  <span>
                    <i className="feather icon-refresh-cw" />
                    Reload
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem tag="li" onClick={this.cardRemoveHandler}>
                <Link to="#">
                  <span>
                    <i className="feather icon-trash" />
                    Remove
                  </span>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    }

    cardHeader = (
      <CardHeader
        className={this.props.headerClass ? this.props.headerClass : null}
      >
        <h5>{this.props.title}</h5>
        {cardHeaderRight}
      </CardHeader>
    );

    if (this.state.fullCard) {
      cardClass = [...cardClass, "full-card"];
      fullScreenStyle = {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        width: this.props.windowWidth + "px",
        height: this.props.windowHeight + "px"
      };
    }

    if (this.state.loadCard) {
      cardClass = [...cardClass, "card-load"];
      loader = (
        <div className="card-loader">
          <i>
            <FontAwesomeIcon icon="sync-alt" className="fa-spin" />
          </i>
        </div>
      );
    }

    if (this.state.cardRemove) {
      cardClass = [...cardClass, "d-none"];
    }

    if (this.props.cardClass) {
      cardClass = [...cardClass, this.props.cardClass];
    }

    card = (
      <Card className={cardClass.join(" ")} style={fullScreenStyle}>
        {cardHeader}
        <Collapse isOpen={!this.state.collapseCard}>
          <CardBody
            className={this.props.bodyClass ? this.props.bodyClass : null}
          >
            {this.props.children}
          </CardBody>
        </Collapse>
        {loader}
      </Card>
    );
    if (this.state.isScroll) {
      card = (
        <Card className={cardClass.join(" ")} style={fullScreenStyle}>
          {cardHeader}
          <Collapse isOpen={!this.state.collapseCard}>
            <PerfectScrollbar>
              <div
                className={this.state.isScroll}
                style={{ height: this.props.scrollHeight }}
              >
                <CardBody
                  className={this.props.bodyClass ? this.props.bodyClass : null}
                >
                  {this.props.children}
                </CardBody>
              </div>
            </PerfectScrollbar>
          </Collapse>
          {loader}
        </Card>
      );
    }

    return card;
  }
}

export default windowSize(MainCard);
