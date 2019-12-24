// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

// import internal(own) modules
import AverageChart from "../../amChart/staticsXYChart/staticsXYChartsBasic";

class AverageStatics extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card
        className={` mrr-card ${
          !props.colorCode
            ? props.bgColor
              ? `${props.bgColor} text-white`
              : null
            : null
        }`}
      >
        <div className="card-body mb-3">
          {!props.Icon ? (
            <span>
              {props.title ? props.title : null}
              {props.user ? <b className="f-w-600"> {props.user}</b> : null}
            </span>
          ) : (
            <span className="d-flex align-items-center">
              <span
                className={`f-22 m-r-5 ${
                  props.textColor ? props.textColor : null
                }`}
              >
                {props.Icon}
              </span>
              {props.title ? props.title : null}
            </span>
          )}
        </div>
        <AverageChart
          data={props.data}
          width={props.width}
          height={props.height}
          colorCode={props.colorCode}
        />
        <div className="card-body">
          <h3 className={`mt-1 mb-1 ${!props.colorCode ? "text-white" : null}`}>
            {props.staticsTop}
          </h3>
          <span>{props.numberBottom}</span>
        </div>
      </Card>
    );
  }
}
AverageStatics.propTypes = {
  title: PropTypes.string,
  staticsTop: PropTypes.string,
  numberBottom: PropTypes.string
};

AverageStatics.defaultProps = {
  title: "Card Title"
};

export default AverageStatics;
