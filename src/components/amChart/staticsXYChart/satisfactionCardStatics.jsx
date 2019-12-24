// import external modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import internal(own) modules
import SatisfactionChartStatic from "./satisfactionChartStatics";

class SatisfactionCardStatic extends Component {
  render() {
    return (
      <Card>
        <div className="card-body">
          <h6>{this.props.title}</h6>
          <span>{this.props.text}</span>
          <span className="text-c-blue d-block">Learn more..</span>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6">
              <SatisfactionChartStatic
                height={this.props.height}
                dataChart={this.props.dataChart}
              />
            </div>
            <div className="col-sm-6">
              <span className="d-block mb-1">
                <FontAwesomeIcon
                  icon="circle"
                  className="f-10 m-r-5"
                  style={{ color: "#67b7dc" }}
                />
                {`Very Satisfied [${this.props.VSatisfied}%]`}
              </span>
              <span className="d-block mb-1">
                <FontAwesomeIcon
                  icon="circle"
                  className="f-10 m-r-5"
                  style={{ color: "#6794dc" }}
                />
                {`Satisfied [${this.props.Satisfied}%]`}
              </span>
              <span className="d-block mb-1">
                <FontAwesomeIcon
                  icon="circle"
                  className="f-10 m-r-5"
                  style={{ color: "#6771dc" }}
                />
                {`Poor [${this.props.Poor}%]`}
              </span>
              <span className="d-block mb-1">
                <FontAwesomeIcon
                  icon="circle"
                  className="f-10 m-r-5"
                  style={{ color: "#8067dc" }}
                />
                {`Very Poor [${this.props.VPoor}%]`}
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
SatisfactionCardStatic.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  VSatisfied: PropTypes.number,
  Satisfied: PropTypes.number,
  Poor: PropTypes.number,
  VPoor: PropTypes.number
};

SatisfactionCardStatic.defaultProps = {
  title: "Title",
  VSatisfied: 0,
  Satisfied: 0,
  Poor: 0,
  VPoor: 0
};

export default SatisfactionCardStatic;
