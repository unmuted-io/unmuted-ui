// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import { ArrowUp } from "react-feather";

// import internal(own) modules
import LineChartStatics from "../../amChart/staticsXYChart/lineChartStatics";

class LineCardStatics extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-body">
          <h6>
            {this.props.title}
            {this.props.info ? (
              <span className="text-muted"> ({this.props.info})</span>
            ) : null}
          </h6>
          <h4 className="m-0">
            {this.props.value}
            <span
              className={`ml-2 ${this.props.color ? this.props.color : null}`}
            >
              <ArrowUp size={20} />
              {this.props.status}
            </span>
          </h4>
          {this.props.current ? <span>{this.props.current}</span> : null}
        </div>
        <LineChartStatics
          data={this.props.data}
          width={this.props.width}
          height={this.props.height}
          colorCode={this.props.colorCode}
        />
      </Card>
    );
  }
}

LineCardStatics.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  status: PropTypes.string
};

LineCardStatics.defaultProps = {
  title: "Line Chart"
};

export default LineCardStatics;
