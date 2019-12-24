// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import internal(own) modules
import StaticPieChart from "../../amChart/staticsPieChart/staticsPieChartBasic";

class PieStatics extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          <StaticPieChart height={this.props.height} data={this.props.data} />
          <div className="mt-3">
            <span className="d-block mb-2">
              <FontAwesomeIcon
                icon="circle"
                className="f-10 m-r-15"
                style={{ color: "#67b7dc" }}
              />
              Desktop Computers
              <span className="float-right f-w-400">{this.props.data1}</span>
            </span>
            <span className="d-block mb-2">
              <FontAwesomeIcon
                icon="circle"
                className="f-10 m-r-15"
                style={{ color: "#8067dc" }}
              />
              Smartphones
              <span className="float-right f-w-400">{this.props.data2}</span>
            </span>
            <span className="d-block">
              <FontAwesomeIcon
                icon="circle"
                className="f-10 m-r-15"
                style={{ color: "#dc67ce" }}
              />
              Tablets
              <span className="float-right f-w-400">{this.props.data3}</span>
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

PieStatics.propTypes = {
  title: PropTypes.string,
  data1: PropTypes.string,
  data2: PropTypes.string,
  data3: PropTypes.string
};
PieStatics.defaultProps = {
  title: "Pie Statics"
};

export default PieStatics;
