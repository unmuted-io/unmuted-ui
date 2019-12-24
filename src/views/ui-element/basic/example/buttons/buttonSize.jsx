// import external modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Button } from "reactstrap";

class ButtonSize extends Component {
  render() {
    let sz;
    if (this.props.size === "lg") {
      sz = "Large";
    }
    if (this.props.size === "sm") {
      sz = "Small";
    }
    return (
      <Card>
        <CardHeader>
          <h5>Sizes [ {sz} ]</h5>
        </CardHeader>
        <CardBody>
          <Button color="primary" size={this.props.size}>
            Large button
          </Button>
          <Button size={this.props.size}>Large button</Button>
        </CardBody>
      </Card>
    );
  }
}

ButtonSize.propTypes = {
  size: PropTypes.string
};
ButtonSize.defaultProps = {
  size: "lg"
};

export default ButtonSize;
