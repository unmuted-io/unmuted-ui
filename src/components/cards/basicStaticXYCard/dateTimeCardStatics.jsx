// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

// import internal(own) modules
import DateTimeChartStatics from "../../amChart/staticsXYChart/dateTimeChartStatics";

class DataTimeCardStatics extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-body">
          <h6 className="mb-3">{this.props.title}</h6>
          <DateTimeChartStatics
            data={this.props.data}
            width={this.props.width}
            height={this.props.height}
          />
        </div>
      </Card>
    );
  }
}

DataTimeCardStatics.propTypes = {
  title: PropTypes.string
};

DataTimeCardStatics.defaultProps = {
  title: "time of day"
};

export default DataTimeCardStatics;
