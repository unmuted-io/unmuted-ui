// import external modules
import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Card, Progress } from "reactstrap";
import { ArrowDown, ArrowUp } from "react-feather";

class ProgressSingle extends PureComponent {
  render() {
    const props = this.props;
    let upDownValue;
    let textBundle;
    let showIng;

    if (props.position === "top") {
      upDownValue = (
        <h6 className="mb-0">
          <ArrowDown className="text-c-red" size="16" />
          {`$${props.downValue}`}
          <span className="float-right">
            <ArrowUp className="text-c-green" size="16" />
            {`$${props.upValue}`}
          </span>
        </h6>
      );
      textBundle = (
        <Fragment>
          <span className="mb-2 d-block">{props.text}</span>
          <h6 className={`text-c-${props.color}`}>{props.textTitle}</h6>
        </Fragment>
      );
    }
    if (props.position === "down") {
      upDownValue = (
        <h6 className="mb-0 mt-4">
          <ArrowUp className="text-c-green" size="16" />
          {`$${props.upValue}`}
          <span className="float-right">
            <ArrowDown className="text-c-red" size="16" />
            {`$${props.downValue}`}
          </span>
        </h6>
      );
      textBundle = (
        <Fragment>
          <h6 className={`mb-3 text-c-${props.color}`}>{props.textTitle}</h6>
          <span>{props.text}</span>
        </Fragment>
      );
    }
    const valueBundle = (
      <Fragment>
        {upDownValue}
        <Progress
          value={props.progressValue}
          color={`${props.progressColor} rounded`}
          style={{ height: "6px" }}
          className="mt-1"
        />
        <span
          className={classnames("d-block", {
            "mt-1  mb-3": props.position === "top",
            "mt-2": props.position === "down"
          })}
        >
          {props.leftText}
          <span className="float-right">{props.rightText}</span>
        </span>
      </Fragment>
    );
    if (props.position === "top") {
      showIng = (
        <Fragment>
          {valueBundle}
          {textBundle}
        </Fragment>
      );
    }
    if (props.position === "down") {
      showIng = (
        <Fragment>
          {textBundle}
          {valueBundle}
        </Fragment>
      );
    }

    return (
      <Card>
        <div className="card-body">{showIng}</div>
      </Card>
    );
  }
}
ProgressSingle.propTypes = {
  position: PropTypes.string,
  downValue: PropTypes.number,
  upValue: PropTypes.number,
  text: PropTypes.string,
  textTitle: PropTypes.string,
  color: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  progressValue: PropTypes.number,
  progressColor: PropTypes.string
};

ProgressSingle.defaultProps = {
  position: "top",
  downValue: 0,
  upValue: 0,
  textTitle: "Bold Text",
  progressValue: 0
};

export default ProgressSingle;
